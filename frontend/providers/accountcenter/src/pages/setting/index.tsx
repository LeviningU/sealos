import { useState } from 'react';
import { serviceSideProps } from '@/utils/i18n';
import Layout from '@/components/Layout';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Text,
  Flex,
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Grid,
  GridItem,
  Image
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import { emailRegexp } from '@/utils/regexp';
import { useQuery } from '@tanstack/react-query';
import { sealosApp } from 'sealos-desktop-sdk/app';
import upperFirst from '@/utils/upperFirst';
import { DeleteIcon } from '@chakra-ui/icons';
import { colorScheme } from '@/utils/commonStyles';
import { colors } from '@sealos/ui/src/theme/colors';

function AccountSettings() {
  const [initialized, setInitialized] = useState(false);
  const { data } = useQuery(
    ['userInfo'],
    () => {
      const d = {
        firstName: 'Feng',
        lastName: 'Lin',
        email: 'test@test.com'
      };
      return new Promise<typeof d>((res) => {
        setTimeout(() => {
          res(d);
        }, 300);
      });
    },
    {
      onSettled() {
        setInitialized(true);
      }
    }
  );
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty }
  } = useForm<{
    firstName: string;
    lastName: string;
    email: string;
  }>({
    mode: 'onChange',
    values: data
  });
  const labels = {
    firstName: t('AccountFirstName'),
    lastName: t('AccountLastName'),
    email: t('Email')
  };
  const onSubmit = handleSubmit(async (formData) => {
    const requestData = {
      ...formData,
      email: undefined
    };
  });
  const renderThirdPartyAccount = (
    nameKey: string,
    { email, bound }: { email?: string; bound: boolean }
  ) => {
    const platform = t(nameKey as any);
    const handleClick = () => {
      return sealosApp.runEvents(`bind${upperFirst(nameKey)}`);
    };
    return (
      <Flex bg="#F9F9F9" borderRadius="12px" p="12px 16px 12px 12px" alignItems="start">
        <Image flexGrow={0} src={`/images/${nameKey}.svg`} w="36px" h="36px" alt={nameKey} />
        <Box flexGrow={1} px="10px">
          <Text fontWeight={500} fontSize="14px" lineHeight="20px" color="#18181B">
            {platform}
          </Text>
          <Text mt="4px" fontSize="12px" color="##71717A" lineHeight={1}>
            {bound ? email : ''}
          </Text>
        </Box>
        <Button
          borderRadius="8px"
          colorScheme="blackAlpha"
          variant="outline"
          onClick={handleClick}
          isDisabled={bound}
        >
          {t(bound ? 'Connected' : 'ConnectAccount', { platform })}
        </Button>
      </Flex>
    );
  };
  return (
    <Layout>
      <Flex
        filter={initialized ? undefined : 'blur(3px)'}
        transition="filter .3s"
        direction="column"
        rowGap="16px"
      >
        <Card variant="outline">
          <CardHeader>{t('AccountInfomation')}</CardHeader>
          <CardBody>
            <Flex align="center" justifyContent="space-between">
              <Box>
                <Text fontSize="16px" lineHeight="24px" mb="1px" color="#18181B">
                  {t('AccountAvatar')}
                </Text>
                <Text fontSize="14px" lineHeight="20px" color="#71717A">
                  {t('AccountAvatarHint')}
                </Text>
              </Box>
              <Box w="64px" h="64px">
                <Avatar size="full" src="https://bit.ly/broken-link" />
              </Box>
            </Flex>
            <Divider orientation="horizontal" my="20px" />
            <form onSubmit={onSubmit}>
              <Grid templateColumns="1fr 1fr" rowGap="16px" columnGap="12px">
                <GridItem>
                  <FormControl isInvalid={Boolean(errors.firstName)}>
                    <FormLabel>{labels.firstName}</FormLabel>
                    <Input
                      {...register('firstName', {
                        required: t('FormRequiredMessage', {
                          label: labels.firstName
                        })
                      })}
                      w="100%"
                    />
                    <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={Boolean(errors.lastName)}>
                    <FormLabel>{labels.lastName}</FormLabel>
                    <Input
                      {...register('lastName', {
                        required: t('FormRequiredMessage', {
                          label: labels.lastName
                        })
                      })}
                      w="100%"
                    />
                    <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={Boolean(errors.email)}>
                    <FormLabel>{labels.email}</FormLabel>
                    <Input
                      {...register('email', {
                        required: t('FormRequiredMessage', {
                          label: labels.email
                        }),
                        pattern: {
                          value: emailRegexp,
                          message: t('FormInvalidEmailMessage')
                        }
                      })}
                      disabled={Boolean(data && data.email)}
                      type="email"
                      w="100%"
                    />
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
              <Box mt="16px">
                <Button type="submit" isLoading={isSubmitting} isDisabled={!isValid || !isDirty}>
                  {t('UpdateInfo')}
                </Button>
              </Box>
            </form>
          </CardBody>
        </Card>
        <Card variant="outline">
          <CardHeader>{t('ConnectedAccounts')}</CardHeader>
          <CardBody>
            <Flex direction="column" rowGap="8px">
              {renderThirdPartyAccount('github', { email: '', bound: false })}
              {renderThirdPartyAccount('google', { email: '222@', bound: true })}
            </Flex>
          </CardBody>
        </Card>
        {/* colorScheme='red' not work here */}
        <Card {...colorScheme.red.card} variant="outline">
          <CardBody>
            <Flex justifyContent="space-between" alignItems="start">
              <Box>
                <Text fontSize="18px" fontWeight={600} lineHeight="28px">
                  {t('DeleteAccount')}
                </Text>
                <Text mt="8px" fontSize="14px" lineHeight="18px" color="#71717A">
                  {t('DeleteAccountTip')}
                </Text>
              </Box>
              {/* colorScheme='red' not work here */}
              <Button {...colorScheme.red.button} h="40px" leftIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Layout>
  );
}

export async function getServerSideProps(content: any) {
  return {
    props: {
      ...(await serviceSideProps(content))
    }
  };
}

export default AccountSettings;
