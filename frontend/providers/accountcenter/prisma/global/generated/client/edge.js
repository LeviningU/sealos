
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.OauthProviderScalarFieldEnum = {
  uid: 'uid',
  userUid: 'userUid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  providerType: 'providerType',
  providerId: 'providerId',
  password: 'password'
};

exports.Prisma.RegionScalarFieldEnum = {
  uid: 'uid',
  displayName: 'displayName',
  location: 'location',
  domain: 'domain',
  description: 'description'
};

exports.Prisma.AccountScalarFieldEnum = {
  userUid: 'userUid',
  activityBonus: 'activityBonus',
  encryptBalance: 'encryptBalance',
  encryptDeductionBalance: 'encryptDeductionBalance',
  created_at: 'created_at',
  create_region_id: 'create_region_id',
  balance: 'balance',
  deduction_balance: 'deduction_balance'
};

exports.Prisma.AccountTransactionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  deduction_balance: 'deduction_balance',
  balance: 'balance',
  message: 'message',
  created_at: 'created_at',
  updated_at: 'updated_at',
  billing_id: 'billing_id',
  userUid: 'userUid',
  balance_before: 'balance_before',
  deduction_balance_before: 'deduction_balance_before',
  region: 'region',
  deduction_credit: 'deduction_credit',
  billing_id_list: 'billing_id_list',
  credit_id_list: 'credit_id_list'
};

exports.Prisma.ErrorPaymentCreateScalarFieldEnum = {
  userUid: 'userUid',
  regionUid: 'regionUid',
  created_at: 'created_at',
  regionUserOwner: 'regionUserOwner',
  method: 'method',
  amount: 'amount',
  gift: 'gift',
  trade_no: 'trade_no',
  code_url: 'code_url',
  invoiced_at: 'invoiced_at',
  remark: 'remark',
  message: 'message',
  create_time: 'create_time'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  regionUid: 'regionUid',
  created_at: 'created_at',
  regionUserOwner: 'regionUserOwner',
  method: 'method',
  amount: 'amount',
  gift: 'gift',
  trade_no: 'trade_no',
  code_url: 'code_url',
  invoiced_at: 'invoiced_at',
  remark: 'remark',
  message: 'message',
  activityType: 'activityType',
  metadata: 'metadata',
  card_uid: 'card_uid',
  type: 'type',
  charge_source: 'charge_source'
};

exports.Prisma.UserScalarFieldEnum = {
  uid: 'uid',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  avatarUri: 'avatarUri',
  nickname: 'nickname',
  id: 'id',
  name: 'name',
  status: 'status'
};

exports.Prisma.InviteRewardScalarFieldEnum = {
  payment_id: 'payment_id',
  userUid: 'userUid',
  created_at: 'created_at',
  payment_amount: 'payment_amount',
  reward_amount: 'reward_amount',
  inviteFrom: 'inviteFrom'
};

exports.Prisma.UserSemChannelScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  channel: 'channel',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  additionalInfo: 'additionalInfo'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  reward: 'reward',
  order: 'order',
  isActive: 'isActive',
  isNewUserTask: 'isNewUserTask',
  taskType: 'taskType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserTaskScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  taskId: 'taskId',
  status: 'status',
  rewardStatus: 'rewardStatus',
  completedAt: 'completedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CardInfoScalarFieldEnum = {
  id: 'id',
  user_uid: 'user_uid',
  card_no: 'card_no',
  card_brand: 'card_brand',
  card_token: 'card_token',
  created_at: 'created_at',
  network_transaction_id: 'network_transaction_id',
  default: 'default',
  last_payment_status: 'last_payment_status'
};

exports.Prisma.CreditsScalarFieldEnum = {
  id: 'id',
  user_uid: 'user_uid',
  amount: 'amount',
  used_amount: 'used_amount',
  from_id: 'from_id',
  from_type: 'from_type',
  expire_at: 'expire_at',
  created_at: 'created_at',
  start_at: 'start_at',
  status: 'status'
};

exports.Prisma.InvoicePaymentScalarFieldEnum = {
  invoice_id: 'invoice_id',
  payment_id: 'payment_id',
  amount: 'amount'
};

exports.Prisma.PaymentOrderScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  regionUid: 'regionUid',
  created_at: 'created_at',
  regionUserOwner: 'regionUserOwner',
  method: 'method',
  amount: 'amount',
  gift: 'gift',
  trade_no: 'trade_no',
  code_url: 'code_url',
  invoiced_at: 'invoiced_at',
  remark: 'remark',
  activityType: 'activityType',
  message: 'message',
  card_uid: 'card_uid',
  type: 'type',
  charge_source: 'charge_source',
  status: 'status'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  plan_id: 'plan_id',
  plan_name: 'plan_name',
  user_uid: 'user_uid',
  status: 'status',
  start_at: 'start_at',
  update_at: 'update_at',
  expire_at: 'expire_at',
  card_id: 'card_id',
  next_cycle_date: 'next_cycle_date'
};

exports.Prisma.SubscriptionPlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  amount: 'amount',
  gift_amount: 'gift_amount',
  period: 'period',
  upgrade_plan_list: 'upgrade_plan_list',
  downgrade_plan_list: 'downgrade_plan_list',
  max_seats: 'max_seats',
  max_workspaces: 'max_workspaces',
  max_resources: 'max_resources',
  created_at: 'created_at',
  updated_at: 'updated_at',
  most_popular: 'most_popular'
};

exports.Prisma.UserInfoScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  firstname: 'firstname',
  lastname: 'lastname',
  signUpRegionUid: 'signUpRegionUid',
  isInited: 'isInited',
  enSubEmail: 'enSubEmail'
};

exports.Prisma.WorkspaceUsageScalarFieldEnum = {
  id: 'id',
  userUid: 'userUid',
  workspaceUid: 'workspaceUid',
  regionUid: 'regionUid',
  seat: 'seat',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.ProviderType = exports.$Enums.ProviderType = {
  PHONE: 'PHONE',
  GITHUB: 'GITHUB',
  WECHAT: 'WECHAT',
  GOOGLE: 'GOOGLE',
  PASSWORD: 'PASSWORD',
  OAUTH2: 'OAUTH2',
  EMAIL: 'EMAIL'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  NORMAL_USER: 'NORMAL_USER',
  LOCK_USER: 'LOCK_USER',
  DELETE_USER: 'DELETE_USER'
};

exports.TaskType = exports.$Enums.TaskType = {
  LAUNCHPAD: 'LAUNCHPAD',
  COSTCENTER: 'COSTCENTER',
  DATABASE: 'DATABASE',
  DESKTOP: 'DESKTOP',
  APPSTORE: 'APPSTORE',
  CRONJOB: 'CRONJOB',
  DEVBOX: 'DEVBOX',
  CONTACT: 'CONTACT',
  REAL_NAME_AUTH: 'REAL_NAME_AUTH'
};

exports.TaskStatus = exports.$Enums.TaskStatus = {
  NOT_COMPLETED: 'NOT_COMPLETED',
  COMPLETED: 'COMPLETED'
};

exports.Prisma.ModelName = {
  OauthProvider: 'OauthProvider',
  Region: 'Region',
  Account: 'Account',
  AccountTransaction: 'AccountTransaction',
  ErrorPaymentCreate: 'ErrorPaymentCreate',
  Payment: 'Payment',
  User: 'User',
  InviteReward: 'InviteReward',
  UserSemChannel: 'UserSemChannel',
  Task: 'Task',
  UserTask: 'UserTask',
  CardInfo: 'CardInfo',
  Credits: 'Credits',
  InvoicePayment: 'InvoicePayment',
  PaymentOrder: 'PaymentOrder',
  Subscription: 'Subscription',
  SubscriptionPlan: 'SubscriptionPlan',
  UserInfo: 'UserInfo',
  WorkspaceUsage: 'WorkspaceUsage'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "globalClient",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Data\\Code\\React\\sealos\\frontend\\providers\\accountcenter\\prisma\\global\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "cockroachdb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "GLOBAL_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator globalClient {\r\n  provider      = \"prisma-client-js\"\r\n  output        = \"./generated/client\"\r\n  binaryTargets = [\"native\", \"linux-musl-openssl-3.0.x\"]\r\n}\r\n\r\ndatasource db {\r\n  provider     = \"cockroachdb\"\r\n  url          = env(\"GLOBAL_DATABASE_URL\")\r\n  relationMode = \"prisma\"\r\n}\r\n\r\nmodel OauthProvider {\r\n  uid          String       @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid      String       @db.Uuid\r\n  createdAt    DateTime     @default(now()) @db.Timestamptz(3)\r\n  updatedAt    DateTime     @updatedAt @db.Timestamptz(3)\r\n  providerType ProviderType\r\n  providerId   String\r\n  password     String?\r\n  user         User         @relation(fields: [userUid], references: [uid])\r\n\r\n  @@unique([providerId, providerType])\r\n  @@index([userUid])\r\n}\r\n\r\nmodel Region {\r\n  uid            String              @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  displayName    String\r\n  location       String\r\n  domain         String\r\n  description    String?\r\n  txDetail       TransactionDetail[] @ignore\r\n  WorkspaceUsage WorkspaceUsage[]\r\n}\r\n\r\nmodel Account {\r\n  userUid                 String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  activityBonus           BigInt\r\n  encryptBalance          String\r\n  encryptDeductionBalance String\r\n  created_at              DateTime @default(now()) @db.Timestamptz(3)\r\n  create_region_id        String\r\n  balance                 BigInt?\r\n  deduction_balance       BigInt?\r\n}\r\n\r\nmodel AccountTransaction {\r\n  id                       String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  type                     String\r\n  deduction_balance        BigInt\r\n  balance                  BigInt\r\n  message                  String?\r\n  created_at               DateTime @default(now()) @db.Timestamptz(3)\r\n  updated_at               DateTime @default(now()) @db.Timestamptz(3)\r\n  billing_id               String   @db.Uuid\r\n  userUid                  String   @db.Uuid\r\n  balance_before           BigInt?\r\n  deduction_balance_before BigInt?\r\n  region                   String?  @db.Uuid\r\n  deduction_credit         BigInt?\r\n  billing_id_list          String[]\r\n  credit_id_list           String[]\r\n}\r\n\r\nmodel ErrorPaymentCreate {\r\n  userUid         String   @db.Uuid\r\n  regionUid       String   @db.Uuid\r\n  created_at      DateTime @default(now()) @db.Timestamptz(3)\r\n  regionUserOwner String\r\n  method          String\r\n  amount          BigInt\r\n  gift            BigInt?\r\n  trade_no        String   @unique\r\n  code_url        String?\r\n  invoiced_at     Boolean? @default(false)\r\n  remark          String?\r\n  message         String\r\n  create_time     DateTime @default(now()) @db.Timestamptz(3)\r\n}\r\n\r\nmodel Payment {\r\n  id              String   @id\r\n  userUid         String   @db.Uuid\r\n  regionUid       String   @db.Uuid\r\n  created_at      DateTime @default(now()) @db.Timestamptz(3)\r\n  regionUserOwner String\r\n  method          String\r\n  amount          BigInt\r\n  gift            BigInt?\r\n  trade_no        String   @unique\r\n  code_url        String?\r\n  invoiced_at     Boolean? @default(false)\r\n  remark          String?\r\n  message         String\r\n  activityType    String?\r\n  metadata        String?\r\n  card_uid        String?  @db.Uuid\r\n  type            String?\r\n  charge_source   String?\r\n}\r\n\r\nmodel User {\r\n  uid                         String                     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  createdAt                   DateTime                   @default(now()) @db.Timestamptz(3)\r\n  updatedAt                   DateTime                   @updatedAt @db.Timestamptz(3)\r\n  avatarUri                   String\r\n  nickname                    String\r\n  id                          String                     @unique\r\n  name                        String                     @unique\r\n  status                      UserStatus                 @default(NORMAL_USER)\r\n  oauthProvider               OauthProvider[]\r\n  oldMergeUserTransactionInfo MergeUserTransactionInfo[] @relation(\"oldUser\") @ignore\r\n  newMergeUserTransactionInfo MergeUserTransactionInfo[] @relation(\"newUser\") @ignore\r\n  DeleteUserTransactionInfo   DeleteUserTransactionInfo? @ignore\r\n  deleteUserLog               DeleteUserLog?             @ignore\r\n  userTasks                   UserTask[]\r\n  userInfo                    UserInfo?\r\n  workspaceUsage              WorkspaceUsage[]\r\n  subscription                Subscription?\r\n}\r\n\r\nmodel Transfer {\r\n  uid         String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  fromUserUid String   @db.Uuid\r\n  toUserUid   String   @db.Uuid\r\n  amount      BigInt\r\n  remark      String\r\n  created_at  DateTime @default(now()) @db.Timestamptz(6)\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel ErrorAccountCreate {\r\n  userUid                 String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  activityBonus           BigInt\r\n  encryptBalance          String\r\n  encryptDeductionBalance String\r\n  created_at              DateTime @default(now()) @db.Timestamptz(3)\r\n  create_region_id        String\r\n  balance                 BigInt?\r\n  deduction_balance       BigInt?\r\n  userCr                  String   @unique\r\n  error_time              DateTime @default(now()) @db.Timestamptz(3)\r\n  regionUid               String   @db.Uuid\r\n  regionUserOwner         String\r\n  message                 String\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel CommitTransactionSet {\r\n  createdAt               DateTime             @default(now()) @db.Timestamptz(3)\r\n  precommitTransactionUid String               @unique @db.Uuid\r\n  precommitTransaction    PrecommitTransaction @relation(fields: [precommitTransactionUid], references: [uid])\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel PrecommitTransaction {\r\n  uid                       String                     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  createdAt                 DateTime                   @default(now()) @db.Timestamptz(3)\r\n  updatedAt                 DateTime                   @updatedAt @db.Timestamptz(3)\r\n  transactionType           TransactionType\r\n  infoUid                   String\r\n  status                    TransactionStatus\r\n  transactionDetail         TransactionDetail[]\r\n  commitTransactionSet      CommitTransactionSet?\r\n  errorPreCommitTransaction ErrorPreCommitTransaction?\r\n\r\n  @@unique([infoUid, transactionType])\r\n  @@ignore\r\n}\r\n\r\nmodel ErrorPreCommitTransaction {\r\n  uid                  String               @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  reason               String?\r\n  createdAt            DateTime             @default(now()) @db.Timestamptz(3)\r\n  transactionUid       String               @unique @db.Uuid\r\n  precommitTransaction PrecommitTransaction @relation(fields: [transactionUid], references: [uid])\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel TransactionDetail {\r\n  uid                  String               @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  createdAt            DateTime             @default(now()) @db.Timestamptz(3)\r\n  updatedAt            DateTime             @updatedAt @db.Timestamptz(3)\r\n  status               TransactionStatus\r\n  regionUid            String\r\n  transactionUid       String\r\n  region               Region               @relation(fields: [regionUid], references: [uid])\r\n  precommitTransaction PrecommitTransaction @relation(fields: [transactionUid], references: [uid])\r\n\r\n  @@unique([transactionUid, regionUid])\r\n  @@index([regionUid])\r\n  @@ignore\r\n}\r\n\r\nmodel MergeUserTransactionInfo {\r\n  uid          String @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  mergeUserUid String @unique\r\n  userUid      String\r\n  mergeUser    User?  @relation(\"oldUser\", fields: [mergeUserUid], references: [uid])\r\n  user         User?  @relation(\"newUser\", fields: [userUid], references: [uid])\r\n\r\n  @@index([userUid])\r\n  @@ignore\r\n}\r\n\r\nmodel DeleteUserTransactionInfo {\r\n  uid     String @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid String @unique\r\n  user    User?  @relation(fields: [userUid], references: [uid])\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel DeleteUserLog {\r\n  userUid   String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  createdAt DateTime @default(now()) @db.Timestamptz(3)\r\n  user      User     @relation(fields: [userUid], references: [uid])\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel AuditLog {\r\n  uid            String           @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  entityUid      String\r\n  entityName     String\r\n  createdAt      DateTime         @default(now()) @db.Timestamptz(3)\r\n  action         AuditAction\r\n  auditLogDetail AuditLogDetail[]\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel AuditLogDetail {\r\n  auditLogUid String   @id\r\n  key         String\r\n  preValue    String\r\n  newValue    String\r\n  auditLog    AuditLog @relation(fields: [auditLogUid], references: [uid])\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel EventLog {\r\n  uid       String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  createdAt DateTime @default(now()) @db.Timestamptz(3)\r\n  mainId    String\r\n  eventName String\r\n  data      String\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel InviteReward {\r\n  payment_id     String   @id\r\n  userUid        String   @db.Uuid\r\n  created_at     DateTime @default(now()) @db.Timestamptz(3)\r\n  payment_amount BigInt\r\n  reward_amount  BigInt\r\n  inviteFrom     String   @db.Uuid\r\n}\r\n\r\nmodel UserRealNameInfo {\r\n  id                  String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid             String   @unique @db.Uuid\r\n  realName            String?\r\n  idCard              String?\r\n  phone               String?\r\n  isVerified          Boolean  @default(false)\r\n  idVerifyFailedTimes Int      @default(0)\r\n  createdAt           DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt           DateTime @updatedAt @db.Timestamptz(3)\r\n  additionalInfo      Json?\r\n\r\n  @@map(\"UserRealNameInfo\")\r\n  @@ignore\r\n}\r\n\r\nmodel EnterpriseRealNameInfo {\r\n  id                       String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid                  String   @unique @db.Uuid\r\n  enterpriseName           String?\r\n  enterpriseQualification  String?\r\n  legalRepresentativePhone String?\r\n  isVerified               Boolean  @default(false)\r\n  verificationStatus       String?\r\n  createdAt                DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt                DateTime @updatedAt @db.Timestamptz(3)\r\n  additionalInfo           Json?\r\n  supportingMaterials      Json?\r\n\r\n  @@map(\"EnterpriseRealNameInfo\")\r\n  @@ignore\r\n}\r\n\r\nmodel RestrictedUser {\r\n  id              String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid         String   @unique @db.Uuid\r\n  restrictedLevel Int\r\n  createdAt       DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt       DateTime @updatedAt @db.Timestamptz(3)\r\n  additionalInfo  Json?\r\n\r\n  @@map(\"RestrictedUser\")\r\n  @@ignore\r\n}\r\n\r\nmodel UserSemChannel {\r\n  id             String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid        String   @unique @db.Uuid\r\n  channel        String\r\n  createdAt      DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt      DateTime @updatedAt @db.Timestamptz(3)\r\n  additionalInfo Json?\r\n\r\n  @@map(\"UserSemChannel\")\r\n}\r\n\r\nmodel GiftCode {\r\n  id           String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  code         String    @unique\r\n  creditAmount BigInt    @default(0)\r\n  used         Boolean   @default(false)\r\n  usedBy       String?   @db.Uuid\r\n  usedAt       DateTime?\r\n  createdAt    DateTime  @default(now())\r\n  expiredAt    DateTime?\r\n  comment      String?\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel Task {\r\n  id            String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  title         String\r\n  description   String\r\n  reward        BigInt\r\n  order         Int\r\n  isActive      Boolean    @default(true)\r\n  isNewUserTask Boolean    @default(false)\r\n  taskType      TaskType\r\n  createdAt     DateTime   @default(now()) @db.Timestamptz(3)\r\n  updatedAt     DateTime   @updatedAt @db.Timestamptz(3)\r\n  userTasks     UserTask[]\r\n}\r\n\r\nmodel UserTask {\r\n  id           String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid      String     @db.Uuid\r\n  taskId       String     @db.Uuid\r\n  status       TaskStatus\r\n  rewardStatus TaskStatus\r\n  completedAt  DateTime\r\n  createdAt    DateTime   @default(now()) @db.Timestamptz(3)\r\n  updatedAt    DateTime   @updatedAt @db.Timestamptz(3)\r\n  user         User       @relation(fields: [userUid], references: [uid])\r\n  task         Task       @relation(fields: [taskId], references: [id])\r\n\r\n  @@unique([userUid, taskId])\r\n  @@index([taskId])\r\n}\r\n\r\nmodel CardInfo {\r\n  id                     String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  user_uid               String    @db.Uuid\r\n  card_no                String?\r\n  card_brand             String?\r\n  card_token             String?   @unique\r\n  created_at             DateTime? @default(now()) @db.Timestamptz(3)\r\n  network_transaction_id String?\r\n  default                Boolean?  @default(false)\r\n  last_payment_status    String?\r\n}\r\n\r\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\r\nmodel Configs {\r\n  type String? @db.String(255)\r\n  data Json?\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel Credits {\r\n  id          String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  user_uid    String?   @db.Uuid\r\n  amount      BigInt?\r\n  used_amount BigInt?\r\n  from_id     String?\r\n  from_type   String?\r\n  expire_at   DateTime? @db.Timestamp(6)\r\n  created_at  DateTime? @default(now()) @db.Timestamptz(3)\r\n  start_at    DateTime? @db.Timestamp(6)\r\n  status      String?\r\n}\r\n\r\nmodel CreditsTransaction {\r\n  id                     String    @id\r\n  user_uid               String?\r\n  account_transaction_id String?\r\n  region_uid             String?\r\n  credits_id             String?\r\n  used_amount            BigInt?\r\n  created_at             DateTime? @db.Timestamptz(6)\r\n  reason                 String?\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel Invoice {\r\n  id           String    @id\r\n  user_id      String\r\n  created_at   DateTime? @default(now()) @db.Timestamptz(3)\r\n  updated_at   DateTime? @default(now()) @db.Timestamptz(3)\r\n  detail       String\r\n  remark       String?\r\n  total_amount BigInt\r\n  status       String\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel InvoicePayment {\r\n  invoice_id String?\r\n  payment_id String  @id\r\n  amount     BigInt\r\n}\r\n\r\nmodel PaymentOrder {\r\n  id              String    @id\r\n  userUid         String    @db.Uuid\r\n  regionUid       String    @db.Uuid\r\n  created_at      DateTime? @default(now()) @db.Timestamptz(3)\r\n  regionUserOwner String\r\n  method          String\r\n  amount          BigInt\r\n  gift            BigInt?\r\n  trade_no        String    @unique\r\n  code_url        String?\r\n  invoiced_at     Boolean?  @default(false)\r\n  remark          String?\r\n  activityType    String?\r\n  message         String\r\n  card_uid        String?   @db.Uuid\r\n  type            String?\r\n  charge_source   String?\r\n  status          String\r\n}\r\n\r\nmodel Subscription {\r\n  id               String           @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  plan_id          String           @db.Uuid\r\n  plan_name        String?          @db.String(50)\r\n  user_uid         String           @unique @db.Uuid\r\n  status           String?          @db.String(50)\r\n  start_at         DateTime?        @db.Timestamptz(6)\r\n  update_at        DateTime?        @db.Timestamptz(6)\r\n  expire_at        DateTime?        @db.Timestamptz(6)\r\n  card_id          String?          @db.Uuid\r\n  next_cycle_date  DateTime?        @db.Timestamptz(6)\r\n  subscriptionPlan SubscriptionPlan @relation(fields: [plan_id], references: [id])\r\n  user             User             @relation(fields: [user_uid], references: [uid])\r\n}\r\n\r\nmodel SubscriptionPlan {\r\n  id                  String         @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  name                String         @unique\r\n  description         String?\r\n  amount              BigInt?\r\n  gift_amount         BigInt?\r\n  period              String?        @db.String(50)\r\n  upgrade_plan_list   String[]\r\n  downgrade_plan_list String[]\r\n  max_seats           BigInt\r\n  max_workspaces      BigInt\r\n  max_resources       String?\r\n  created_at          DateTime?      @db.Timestamptz(6)\r\n  updated_at          DateTime?      @db.Timestamptz(6)\r\n  most_popular        Boolean?\r\n  Subscription        Subscription[]\r\n}\r\n\r\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\r\nmodel SubscriptionTransaction {\r\n  subscription_id String    @db.Uuid\r\n  user_uid        String    @db.Uuid\r\n  old_plan_id     String?   @db.Uuid\r\n  new_plan_id     String?   @db.Uuid\r\n  old_plan_name   String?   @db.String(50)\r\n  new_plan_name   String?   @db.String(50)\r\n  old_plan_status String?   @db.String(50)\r\n  operator        String?   @db.String(50)\r\n  start_at        DateTime? @db.Timestamptz(6)\r\n  created_at      DateTime? @db.Timestamptz(6)\r\n  updated_at      DateTime? @db.Timestamptz(6)\r\n  status          String?   @db.String(50)\r\n  pay_status      String?   @db.String(50)\r\n  pay_id          String?\r\n  amount          BigInt?\r\n\r\n  @@index([subscription_id], map: \"idx_SubscriptionTransaction_subscription_id\")\r\n  @@index([user_uid], map: \"idx_SubscriptionTransaction_user_uid\")\r\n  @@ignore\r\n}\r\n\r\nmodel UserTransfer {\r\n  id          String\r\n  uid         String    @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  fromUserUid String    @db.Uuid\r\n  fromUserId  String\r\n  toUserUid   String    @db.Uuid\r\n  toUserId    String\r\n  amount      BigInt\r\n  remark      String\r\n  created_at  DateTime? @default(now()) @db.Timestamptz(3)\r\n\r\n  @@id([id, uid])\r\n  @@ignore\r\n}\r\n\r\nmodel RealNameAuthProvider {\r\n  id             String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  backend        String\r\n  authType       String\r\n  maxFailedTimes Int\r\n  config         Json?\r\n  createdAt      DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt      DateTime @db.Timestamptz(3)\r\n\r\n  @@ignore\r\n}\r\n\r\nmodel UserInfo {\r\n  id              String  @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid         String  @unique @db.Uuid\r\n  firstname       String  @default(\"\")\r\n  lastname        String  @default(\"\")\r\n  signUpRegionUid String  @db.Uuid\r\n  isInited        Boolean @default(false)\r\n  enSubEmail      Boolean @default(false)\r\n  user            User    @relation(fields: [userUid], references: [uid])\r\n}\r\n\r\nmodel WorkspaceUsage {\r\n  id           String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\r\n  userUid      String   @db.Uuid\r\n  workspaceUid String   @db.Uuid\r\n  regionUid    String   @db.Uuid\r\n  seat         Int\r\n  createdAt    DateTime @default(now()) @db.Timestamptz(3)\r\n  updatedAt    DateTime @db.Timestamptz(3)\r\n\r\n  region Region @relation(fields: [regionUid], references: [uid])\r\n  user   User   @relation(fields: [userUid], references: [uid])\r\n\r\n  @@unique([regionUid, userUid, workspaceUid])\r\n  @@index([userUid])\r\n}\r\n\r\nenum ProviderType {\r\n  PHONE\r\n  GITHUB\r\n  WECHAT\r\n  GOOGLE\r\n  PASSWORD\r\n  OAUTH2\r\n  EMAIL\r\n}\r\n\r\nenum TransactionStatus {\r\n  READY\r\n  RUNNING\r\n  FINISH\r\n  COMMITED\r\n  ERROR\r\n}\r\n\r\nenum TransactionType {\r\n  MERGE_USER\r\n  DELETE_USER\r\n}\r\n\r\nenum AuditAction {\r\n  UPDATE\r\n  DELETE\r\n  CREATE\r\n}\r\n\r\nenum UserStatus {\r\n  NORMAL_USER\r\n  LOCK_USER\r\n  DELETE_USER\r\n}\r\n\r\nenum TaskType {\r\n  LAUNCHPAD\r\n  COSTCENTER\r\n  DATABASE\r\n  DESKTOP\r\n  APPSTORE\r\n  CRONJOB\r\n  DEVBOX\r\n  CONTACT\r\n  REAL_NAME_AUTH\r\n}\r\n\r\nenum TaskStatus {\r\n  NOT_COMPLETED\r\n  COMPLETED\r\n}\r\n",
  "inlineSchemaHash": "c30e1f475862568d7bb466b9576cf40ce3860631fc0de43c164e7206c0d32342",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"OauthProvider\":{\"dbName\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"providerType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"OauthProviderToUser\",\"relationFromFields\":[\"userUid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"providerId\",\"providerType\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"providerId\",\"providerType\"]}],\"isGenerated\":false},\"Region\":{\"dbName\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WorkspaceUsage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceUsage\",\"relationName\":\"RegionToWorkspaceUsage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Account\":{\"dbName\":null,\"fields\":[{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encryptBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encryptDeductionBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_region_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deduction_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AccountTransaction\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deduction_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deduction_balance_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deduction_credit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billing_id_list\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credit_id_list\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ErrorPaymentCreate\":{\"dbName\":null,\"fields\":[{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUserOwner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiced_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUserOwner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiced_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charge_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"avatarUri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"NORMAL_USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthProvider\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OauthProvider\",\"relationName\":\"OauthProviderToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserTask\",\"relationName\":\"UserToUserTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserInfo\",\"relationName\":\"UserToUserInfo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceUsage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorkspaceUsage\",\"relationName\":\"UserToWorkspaceUsage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subscription\",\"relationName\":\"SubscriptionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InviteReward\":{\"dbName\":null,\"fields\":[{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reward_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inviteFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSemChannel\":{\"dbName\":\"UserSemChannel\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"channel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"additionalInfo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Task\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reward\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isNewUserTask\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TaskType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userTasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserTask\",\"relationName\":\"TaskToUserTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserTask\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taskId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TaskStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TaskStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserTask\",\"relationFromFields\":[\"userUid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Task\",\"relationName\":\"TaskToUserTask\",\"relationFromFields\":[\"taskId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userUid\",\"taskId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userUid\",\"taskId\"]}],\"isGenerated\":false},\"CardInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"network_transaction_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_payment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Credits\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"used_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvoicePayment\":{\"dbName\":null,\"fields\":[{\"name\":\"invoice_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentOrder\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUserOwner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade_no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invoiced_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charge_source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Subscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_cycle_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionPlan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubscriptionPlan\",\"relationName\":\"SubscriptionToSubscriptionPlan\",\"relationFromFields\":[\"plan_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"SubscriptionToUser\",\"relationFromFields\":[\"user_uid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubscriptionPlan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gift_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upgrade_plan_list\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"downgrade_plan_list\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_seats\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_workspaces\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_resources\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"most_popular\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subscription\",\"relationName\":\"SubscriptionToSubscriptionPlan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserInfo\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signUpRegionUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isInited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enSubEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserInfo\",\"relationFromFields\":[\"userUid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorkspaceUsage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaceUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionUid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Region\",\"relationName\":\"RegionToWorkspaceUsage\",\"relationFromFields\":[\"regionUid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToWorkspaceUsage\",\"relationFromFields\":[\"userUid\"],\"relationToFields\":[\"uid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"regionUid\",\"userUid\",\"workspaceUid\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"regionUid\",\"userUid\",\"workspaceUid\"]}],\"isGenerated\":false}},\"enums\":{\"ProviderType\":{\"values\":[{\"name\":\"PHONE\",\"dbName\":null},{\"name\":\"GITHUB\",\"dbName\":null},{\"name\":\"WECHAT\",\"dbName\":null},{\"name\":\"GOOGLE\",\"dbName\":null},{\"name\":\"PASSWORD\",\"dbName\":null},{\"name\":\"OAUTH2\",\"dbName\":null},{\"name\":\"EMAIL\",\"dbName\":null}],\"dbName\":null},\"TransactionStatus\":{\"values\":[{\"name\":\"READY\",\"dbName\":null},{\"name\":\"RUNNING\",\"dbName\":null},{\"name\":\"FINISH\",\"dbName\":null},{\"name\":\"COMMITED\",\"dbName\":null},{\"name\":\"ERROR\",\"dbName\":null}],\"dbName\":null},\"TransactionType\":{\"values\":[{\"name\":\"MERGE_USER\",\"dbName\":null},{\"name\":\"DELETE_USER\",\"dbName\":null}],\"dbName\":null},\"AuditAction\":{\"values\":[{\"name\":\"UPDATE\",\"dbName\":null},{\"name\":\"DELETE\",\"dbName\":null},{\"name\":\"CREATE\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"NORMAL_USER\",\"dbName\":null},{\"name\":\"LOCK_USER\",\"dbName\":null},{\"name\":\"DELETE_USER\",\"dbName\":null}],\"dbName\":null},\"TaskType\":{\"values\":[{\"name\":\"LAUNCHPAD\",\"dbName\":null},{\"name\":\"COSTCENTER\",\"dbName\":null},{\"name\":\"DATABASE\",\"dbName\":null},{\"name\":\"DESKTOP\",\"dbName\":null},{\"name\":\"APPSTORE\",\"dbName\":null},{\"name\":\"CRONJOB\",\"dbName\":null},{\"name\":\"DEVBOX\",\"dbName\":null},{\"name\":\"CONTACT\",\"dbName\":null},{\"name\":\"REAL_NAME_AUTH\",\"dbName\":null}],\"dbName\":null},\"TaskStatus\":{\"values\":[{\"name\":\"NOT_COMPLETED\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    GLOBAL_DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['GLOBAL_DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.GLOBAL_DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

