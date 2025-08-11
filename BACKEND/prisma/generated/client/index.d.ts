
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account_table
 * 
 */
export type account_table = $Result.DefaultSelection<Prisma.$account_tablePayload>
/**
 * Model transaction_table
 * 
 */
export type transaction_table = $Result.DefaultSelection<Prisma.$transaction_tablePayload>
/**
 * Model properties_table
 * 
 */
export type properties_table = $Result.DefaultSelection<Prisma.$properties_tablePayload>
/**
 * Model room_table
 * 
 */
export type room_table = $Result.DefaultSelection<Prisma.$room_tablePayload>
/**
 * Model user_review
 * 
 */
export type user_review = $Result.DefaultSelection<Prisma.$user_reviewPayload>
/**
 * Model booked_user_list
 * 
 */
export type booked_user_list = $Result.DefaultSelection<Prisma.$booked_user_listPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const account_role: {
  USER: 'USER',
  TENANT: 'TENANT'
};

export type account_role = (typeof account_role)[keyof typeof account_role]


export const trx_status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type trx_status = (typeof trx_status)[keyof typeof trx_status]

}

export type account_role = $Enums.account_role

export const account_role: typeof $Enums.account_role

export type trx_status = $Enums.trx_status

export const trx_status: typeof $Enums.trx_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Account_tables
 * const account_tables = await prisma.account_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Account_tables
   * const account_tables = await prisma.account_table.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account_table`: Exposes CRUD operations for the **account_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_tables
    * const account_tables = await prisma.account_table.findMany()
    * ```
    */
  get account_table(): Prisma.account_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_table`: Exposes CRUD operations for the **transaction_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_tables
    * const transaction_tables = await prisma.transaction_table.findMany()
    * ```
    */
  get transaction_table(): Prisma.transaction_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.properties_table`: Exposes CRUD operations for the **properties_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties_tables
    * const properties_tables = await prisma.properties_table.findMany()
    * ```
    */
  get properties_table(): Prisma.properties_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_table`: Exposes CRUD operations for the **room_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_tables
    * const room_tables = await prisma.room_table.findMany()
    * ```
    */
  get room_table(): Prisma.room_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_review`: Exposes CRUD operations for the **user_review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_reviews
    * const user_reviews = await prisma.user_review.findMany()
    * ```
    */
  get user_review(): Prisma.user_reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booked_user_list`: Exposes CRUD operations for the **booked_user_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booked_user_lists
    * const booked_user_lists = await prisma.booked_user_list.findMany()
    * ```
    */
  get booked_user_list(): Prisma.booked_user_listDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account_table: 'account_table',
    transaction_table: 'transaction_table',
    properties_table: 'properties_table',
    room_table: 'room_table',
    user_review: 'user_review',
    booked_user_list: 'booked_user_list'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account_table" | "transaction_table" | "properties_table" | "room_table" | "user_review" | "booked_user_list"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account_table: {
        payload: Prisma.$account_tablePayload<ExtArgs>
        fields: Prisma.account_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.account_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.account_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          findFirst: {
            args: Prisma.account_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.account_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          findMany: {
            args: Prisma.account_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>[]
          }
          create: {
            args: Prisma.account_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          createMany: {
            args: Prisma.account_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.account_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>[]
          }
          delete: {
            args: Prisma.account_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          update: {
            args: Prisma.account_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          deleteMany: {
            args: Prisma.account_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.account_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.account_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>[]
          }
          upsert: {
            args: Prisma.account_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_tablePayload>
          }
          aggregate: {
            args: Prisma.Account_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_table>
          }
          groupBy: {
            args: Prisma.account_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.account_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Account_tableCountAggregateOutputType> | number
          }
        }
      }
      transaction_table: {
        payload: Prisma.$transaction_tablePayload<ExtArgs>
        fields: Prisma.transaction_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          findFirst: {
            args: Prisma.transaction_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          findMany: {
            args: Prisma.transaction_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>[]
          }
          create: {
            args: Prisma.transaction_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          createMany: {
            args: Prisma.transaction_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>[]
          }
          delete: {
            args: Prisma.transaction_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          update: {
            args: Prisma.transaction_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          deleteMany: {
            args: Prisma.transaction_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>[]
          }
          upsert: {
            args: Prisma.transaction_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          aggregate: {
            args: Prisma.Transaction_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_table>
          }
          groupBy: {
            args: Prisma.transaction_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_tableCountAggregateOutputType> | number
          }
        }
      }
      properties_table: {
        payload: Prisma.$properties_tablePayload<ExtArgs>
        fields: Prisma.properties_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.properties_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.properties_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          findFirst: {
            args: Prisma.properties_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.properties_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          findMany: {
            args: Prisma.properties_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>[]
          }
          create: {
            args: Prisma.properties_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          createMany: {
            args: Prisma.properties_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.properties_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>[]
          }
          delete: {
            args: Prisma.properties_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          update: {
            args: Prisma.properties_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          deleteMany: {
            args: Prisma.properties_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.properties_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.properties_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>[]
          }
          upsert: {
            args: Prisma.properties_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$properties_tablePayload>
          }
          aggregate: {
            args: Prisma.Properties_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperties_table>
          }
          groupBy: {
            args: Prisma.properties_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Properties_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.properties_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Properties_tableCountAggregateOutputType> | number
          }
        }
      }
      room_table: {
        payload: Prisma.$room_tablePayload<ExtArgs>
        fields: Prisma.room_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          findFirst: {
            args: Prisma.room_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          findMany: {
            args: Prisma.room_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>[]
          }
          create: {
            args: Prisma.room_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          createMany: {
            args: Prisma.room_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>[]
          }
          delete: {
            args: Prisma.room_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          update: {
            args: Prisma.room_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          deleteMany: {
            args: Prisma.room_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>[]
          }
          upsert: {
            args: Prisma.room_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_tablePayload>
          }
          aggregate: {
            args: Prisma.Room_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_table>
          }
          groupBy: {
            args: Prisma.room_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Room_tableCountAggregateOutputType> | number
          }
        }
      }
      user_review: {
        payload: Prisma.$user_reviewPayload<ExtArgs>
        fields: Prisma.user_reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          findFirst: {
            args: Prisma.user_reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          findMany: {
            args: Prisma.user_reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>[]
          }
          create: {
            args: Prisma.user_reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          createMany: {
            args: Prisma.user_reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>[]
          }
          delete: {
            args: Prisma.user_reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          update: {
            args: Prisma.user_reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          deleteMany: {
            args: Prisma.user_reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>[]
          }
          upsert: {
            args: Prisma.user_reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_reviewPayload>
          }
          aggregate: {
            args: Prisma.User_reviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_review>
          }
          groupBy: {
            args: Prisma.user_reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_reviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_reviewCountArgs<ExtArgs>
            result: $Utils.Optional<User_reviewCountAggregateOutputType> | number
          }
        }
      }
      booked_user_list: {
        payload: Prisma.$booked_user_listPayload<ExtArgs>
        fields: Prisma.booked_user_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booked_user_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booked_user_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          findFirst: {
            args: Prisma.booked_user_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booked_user_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          findMany: {
            args: Prisma.booked_user_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>[]
          }
          create: {
            args: Prisma.booked_user_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          createMany: {
            args: Prisma.booked_user_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.booked_user_listCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>[]
          }
          delete: {
            args: Prisma.booked_user_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          update: {
            args: Prisma.booked_user_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          deleteMany: {
            args: Prisma.booked_user_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booked_user_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.booked_user_listUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>[]
          }
          upsert: {
            args: Prisma.booked_user_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booked_user_listPayload>
          }
          aggregate: {
            args: Prisma.Booked_user_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooked_user_list>
          }
          groupBy: {
            args: Prisma.booked_user_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<Booked_user_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.booked_user_listCountArgs<ExtArgs>
            result: $Utils.Optional<Booked_user_listCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account_table?: account_tableOmit
    transaction_table?: transaction_tableOmit
    properties_table?: properties_tableOmit
    room_table?: room_tableOmit
    user_review?: user_reviewOmit
    booked_user_list?: booked_user_listOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Account_tableCountOutputType
   */

  export type Account_tableCountOutputType = {
    transaction_table: number
    properties_table: number
    user_review: number
    booked_user_list: number
  }

  export type Account_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | Account_tableCountOutputTypeCountTransaction_tableArgs
    properties_table?: boolean | Account_tableCountOutputTypeCountProperties_tableArgs
    user_review?: boolean | Account_tableCountOutputTypeCountUser_reviewArgs
    booked_user_list?: boolean | Account_tableCountOutputTypeCountBooked_user_listArgs
  }

  // Custom InputTypes
  /**
   * Account_tableCountOutputType without action
   */
  export type Account_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_tableCountOutputType
     */
    select?: Account_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Account_tableCountOutputType without action
   */
  export type Account_tableCountOutputTypeCountTransaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
  }

  /**
   * Account_tableCountOutputType without action
   */
  export type Account_tableCountOutputTypeCountProperties_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: properties_tableWhereInput
  }

  /**
   * Account_tableCountOutputType without action
   */
  export type Account_tableCountOutputTypeCountUser_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_reviewWhereInput
  }

  /**
   * Account_tableCountOutputType without action
   */
  export type Account_tableCountOutputTypeCountBooked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booked_user_listWhereInput
  }


  /**
   * Count Type Transaction_tableCountOutputType
   */

  export type Transaction_tableCountOutputType = {
    user_review: number
    booked_user_list: number
  }

  export type Transaction_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_review?: boolean | Transaction_tableCountOutputTypeCountUser_reviewArgs
    booked_user_list?: boolean | Transaction_tableCountOutputTypeCountBooked_user_listArgs
  }

  // Custom InputTypes
  /**
   * Transaction_tableCountOutputType without action
   */
  export type Transaction_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_tableCountOutputType
     */
    select?: Transaction_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Transaction_tableCountOutputType without action
   */
  export type Transaction_tableCountOutputTypeCountUser_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_reviewWhereInput
  }

  /**
   * Transaction_tableCountOutputType without action
   */
  export type Transaction_tableCountOutputTypeCountBooked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booked_user_listWhereInput
  }


  /**
   * Count Type Properties_tableCountOutputType
   */

  export type Properties_tableCountOutputType = {
    transaction_table: number
    user_review: number
    booked_user_list: number
  }

  export type Properties_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | Properties_tableCountOutputTypeCountTransaction_tableArgs
    user_review?: boolean | Properties_tableCountOutputTypeCountUser_reviewArgs
    booked_user_list?: boolean | Properties_tableCountOutputTypeCountBooked_user_listArgs
  }

  // Custom InputTypes
  /**
   * Properties_tableCountOutputType without action
   */
  export type Properties_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties_tableCountOutputType
     */
    select?: Properties_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Properties_tableCountOutputType without action
   */
  export type Properties_tableCountOutputTypeCountTransaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
  }

  /**
   * Properties_tableCountOutputType without action
   */
  export type Properties_tableCountOutputTypeCountUser_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_reviewWhereInput
  }

  /**
   * Properties_tableCountOutputType without action
   */
  export type Properties_tableCountOutputTypeCountBooked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booked_user_listWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account_table
   */

  export type AggregateAccount_table = {
    _count: Account_tableCountAggregateOutputType | null
    _avg: Account_tableAvgAggregateOutputType | null
    _sum: Account_tableSumAggregateOutputType | null
    _min: Account_tableMinAggregateOutputType | null
    _max: Account_tableMaxAggregateOutputType | null
  }

  export type Account_tableAvgAggregateOutputType = {
    id: number | null
  }

  export type Account_tableSumAggregateOutputType = {
    id: number | null
  }

  export type Account_tableMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.account_role | null
    password: string | null
    image: string | null
    created_at: Date | null
  }

  export type Account_tableMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.account_role | null
    password: string | null
    image: string | null
    created_at: Date | null
  }

  export type Account_tableCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    role: number
    password: number
    image: number
    created_at: number
    _all: number
  }


  export type Account_tableAvgAggregateInputType = {
    id?: true
  }

  export type Account_tableSumAggregateInputType = {
    id?: true
  }

  export type Account_tableMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    password?: true
    image?: true
    created_at?: true
  }

  export type Account_tableMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    password?: true
    image?: true
    created_at?: true
  }

  export type Account_tableCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    password?: true
    image?: true
    created_at?: true
    _all?: true
  }

  export type Account_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_table to aggregate.
     */
    where?: account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_tables to fetch.
     */
    orderBy?: account_tableOrderByWithRelationInput | account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_tables
    **/
    _count?: true | Account_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_tableMaxAggregateInputType
  }

  export type GetAccount_tableAggregateType<T extends Account_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_table[P]>
      : GetScalarType<T[P], AggregateAccount_table[P]>
  }




  export type account_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_tableWhereInput
    orderBy?: account_tableOrderByWithAggregationInput | account_tableOrderByWithAggregationInput[]
    by: Account_tableScalarFieldEnum[] | Account_tableScalarFieldEnum
    having?: account_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_tableCountAggregateInputType | true
    _avg?: Account_tableAvgAggregateInputType
    _sum?: Account_tableSumAggregateInputType
    _min?: Account_tableMinAggregateInputType
    _max?: Account_tableMaxAggregateInputType
  }

  export type Account_tableGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at: Date
    _count: Account_tableCountAggregateOutputType | null
    _avg: Account_tableAvgAggregateOutputType | null
    _sum: Account_tableSumAggregateOutputType | null
    _min: Account_tableMinAggregateOutputType | null
    _max: Account_tableMaxAggregateOutputType | null
  }

  type GetAccount_tableGroupByPayload<T extends account_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Account_tableGroupByOutputType[P]>
        }
      >
    >


  export type account_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    image?: boolean
    created_at?: boolean
    transaction_table?: boolean | account_table$transaction_tableArgs<ExtArgs>
    properties_table?: boolean | account_table$properties_tableArgs<ExtArgs>
    user_review?: boolean | account_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | account_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Account_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_table"]>

  export type account_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["account_table"]>

  export type account_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    image?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["account_table"]>

  export type account_tableSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    image?: boolean
    created_at?: boolean
  }

  export type account_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "role" | "password" | "image" | "created_at", ExtArgs["result"]["account_table"]>
  export type account_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | account_table$transaction_tableArgs<ExtArgs>
    properties_table?: boolean | account_table$properties_tableArgs<ExtArgs>
    user_review?: boolean | account_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | account_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Account_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type account_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type account_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $account_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account_table"
    objects: {
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>[]
      properties_table: Prisma.$properties_tablePayload<ExtArgs>[]
      user_review: Prisma.$user_reviewPayload<ExtArgs>[]
      booked_user_list: Prisma.$booked_user_listPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      role: $Enums.account_role
      password: string
      image: string
      created_at: Date
    }, ExtArgs["result"]["account_table"]>
    composites: {}
  }

  type account_tableGetPayload<S extends boolean | null | undefined | account_tableDefaultArgs> = $Result.GetResult<Prisma.$account_tablePayload, S>

  type account_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<account_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Account_tableCountAggregateInputType | true
    }

  export interface account_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account_table'], meta: { name: 'account_table' } }
    /**
     * Find zero or one Account_table that matches the filter.
     * @param {account_tableFindUniqueArgs} args - Arguments to find a Account_table
     * @example
     * // Get one Account_table
     * const account_table = await prisma.account_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends account_tableFindUniqueArgs>(args: SelectSubset<T, account_tableFindUniqueArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {account_tableFindUniqueOrThrowArgs} args - Arguments to find a Account_table
     * @example
     * // Get one Account_table
     * const account_table = await prisma.account_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends account_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, account_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableFindFirstArgs} args - Arguments to find a Account_table
     * @example
     * // Get one Account_table
     * const account_table = await prisma.account_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends account_tableFindFirstArgs>(args?: SelectSubset<T, account_tableFindFirstArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableFindFirstOrThrowArgs} args - Arguments to find a Account_table
     * @example
     * // Get one Account_table
     * const account_table = await prisma.account_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends account_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, account_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Account_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_tables
     * const account_tables = await prisma.account_table.findMany()
     * 
     * // Get first 10 Account_tables
     * const account_tables = await prisma.account_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const account_tableWithIdOnly = await prisma.account_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends account_tableFindManyArgs>(args?: SelectSubset<T, account_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account_table.
     * @param {account_tableCreateArgs} args - Arguments to create a Account_table.
     * @example
     * // Create one Account_table
     * const Account_table = await prisma.account_table.create({
     *   data: {
     *     // ... data to create a Account_table
     *   }
     * })
     * 
     */
    create<T extends account_tableCreateArgs>(args: SelectSubset<T, account_tableCreateArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Account_tables.
     * @param {account_tableCreateManyArgs} args - Arguments to create many Account_tables.
     * @example
     * // Create many Account_tables
     * const account_table = await prisma.account_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends account_tableCreateManyArgs>(args?: SelectSubset<T, account_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_tables and returns the data saved in the database.
     * @param {account_tableCreateManyAndReturnArgs} args - Arguments to create many Account_tables.
     * @example
     * // Create many Account_tables
     * const account_table = await prisma.account_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_tables and only return the `id`
     * const account_tableWithIdOnly = await prisma.account_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends account_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, account_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account_table.
     * @param {account_tableDeleteArgs} args - Arguments to delete one Account_table.
     * @example
     * // Delete one Account_table
     * const Account_table = await prisma.account_table.delete({
     *   where: {
     *     // ... filter to delete one Account_table
     *   }
     * })
     * 
     */
    delete<T extends account_tableDeleteArgs>(args: SelectSubset<T, account_tableDeleteArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account_table.
     * @param {account_tableUpdateArgs} args - Arguments to update one Account_table.
     * @example
     * // Update one Account_table
     * const account_table = await prisma.account_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends account_tableUpdateArgs>(args: SelectSubset<T, account_tableUpdateArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Account_tables.
     * @param {account_tableDeleteManyArgs} args - Arguments to filter Account_tables to delete.
     * @example
     * // Delete a few Account_tables
     * const { count } = await prisma.account_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends account_tableDeleteManyArgs>(args?: SelectSubset<T, account_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_tables
     * const account_table = await prisma.account_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends account_tableUpdateManyArgs>(args: SelectSubset<T, account_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_tables and returns the data updated in the database.
     * @param {account_tableUpdateManyAndReturnArgs} args - Arguments to update many Account_tables.
     * @example
     * // Update many Account_tables
     * const account_table = await prisma.account_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Account_tables and only return the `id`
     * const account_tableWithIdOnly = await prisma.account_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends account_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, account_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account_table.
     * @param {account_tableUpsertArgs} args - Arguments to update or create a Account_table.
     * @example
     * // Update or create a Account_table
     * const account_table = await prisma.account_table.upsert({
     *   create: {
     *     // ... data to create a Account_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_table we want to update
     *   }
     * })
     */
    upsert<T extends account_tableUpsertArgs>(args: SelectSubset<T, account_tableUpsertArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableCountArgs} args - Arguments to filter Account_tables to count.
     * @example
     * // Count the number of Account_tables
     * const count = await prisma.account_table.count({
     *   where: {
     *     // ... the filter for the Account_tables we want to count
     *   }
     * })
    **/
    count<T extends account_tableCountArgs>(
      args?: Subset<T, account_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_tableAggregateArgs>(args: Subset<T, Account_tableAggregateArgs>): Prisma.PrismaPromise<GetAccount_tableAggregateType<T>>

    /**
     * Group by Account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends account_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: account_tableGroupByArgs['orderBy'] }
        : { orderBy?: account_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, account_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account_table model
   */
  readonly fields: account_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__account_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction_table<T extends account_table$transaction_tableArgs<ExtArgs> = {}>(args?: Subset<T, account_table$transaction_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties_table<T extends account_table$properties_tableArgs<ExtArgs> = {}>(args?: Subset<T, account_table$properties_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_review<T extends account_table$user_reviewArgs<ExtArgs> = {}>(args?: Subset<T, account_table$user_reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booked_user_list<T extends account_table$booked_user_listArgs<ExtArgs> = {}>(args?: Subset<T, account_table$booked_user_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account_table model
   */
  interface account_tableFieldRefs {
    readonly id: FieldRef<"account_table", 'Int'>
    readonly fullname: FieldRef<"account_table", 'String'>
    readonly username: FieldRef<"account_table", 'String'>
    readonly email: FieldRef<"account_table", 'String'>
    readonly role: FieldRef<"account_table", 'account_role'>
    readonly password: FieldRef<"account_table", 'String'>
    readonly image: FieldRef<"account_table", 'String'>
    readonly created_at: FieldRef<"account_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account_table findUnique
   */
  export type account_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter, which account_table to fetch.
     */
    where: account_tableWhereUniqueInput
  }

  /**
   * account_table findUniqueOrThrow
   */
  export type account_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter, which account_table to fetch.
     */
    where: account_tableWhereUniqueInput
  }

  /**
   * account_table findFirst
   */
  export type account_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter, which account_table to fetch.
     */
    where?: account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_tables to fetch.
     */
    orderBy?: account_tableOrderByWithRelationInput | account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_tables.
     */
    cursor?: account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_tables.
     */
    distinct?: Account_tableScalarFieldEnum | Account_tableScalarFieldEnum[]
  }

  /**
   * account_table findFirstOrThrow
   */
  export type account_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter, which account_table to fetch.
     */
    where?: account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_tables to fetch.
     */
    orderBy?: account_tableOrderByWithRelationInput | account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_tables.
     */
    cursor?: account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_tables.
     */
    distinct?: Account_tableScalarFieldEnum | Account_tableScalarFieldEnum[]
  }

  /**
   * account_table findMany
   */
  export type account_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter, which account_tables to fetch.
     */
    where?: account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_tables to fetch.
     */
    orderBy?: account_tableOrderByWithRelationInput | account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_tables.
     */
    cursor?: account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_tables.
     */
    skip?: number
    distinct?: Account_tableScalarFieldEnum | Account_tableScalarFieldEnum[]
  }

  /**
   * account_table create
   */
  export type account_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a account_table.
     */
    data: XOR<account_tableCreateInput, account_tableUncheckedCreateInput>
  }

  /**
   * account_table createMany
   */
  export type account_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many account_tables.
     */
    data: account_tableCreateManyInput | account_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_table createManyAndReturn
   */
  export type account_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * The data used to create many account_tables.
     */
    data: account_tableCreateManyInput | account_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_table update
   */
  export type account_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a account_table.
     */
    data: XOR<account_tableUpdateInput, account_tableUncheckedUpdateInput>
    /**
     * Choose, which account_table to update.
     */
    where: account_tableWhereUniqueInput
  }

  /**
   * account_table updateMany
   */
  export type account_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update account_tables.
     */
    data: XOR<account_tableUpdateManyMutationInput, account_tableUncheckedUpdateManyInput>
    /**
     * Filter which account_tables to update
     */
    where?: account_tableWhereInput
    /**
     * Limit how many account_tables to update.
     */
    limit?: number
  }

  /**
   * account_table updateManyAndReturn
   */
  export type account_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * The data used to update account_tables.
     */
    data: XOR<account_tableUpdateManyMutationInput, account_tableUncheckedUpdateManyInput>
    /**
     * Filter which account_tables to update
     */
    where?: account_tableWhereInput
    /**
     * Limit how many account_tables to update.
     */
    limit?: number
  }

  /**
   * account_table upsert
   */
  export type account_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the account_table to update in case it exists.
     */
    where: account_tableWhereUniqueInput
    /**
     * In case the account_table found by the `where` argument doesn't exist, create a new account_table with this data.
     */
    create: XOR<account_tableCreateInput, account_tableUncheckedCreateInput>
    /**
     * In case the account_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_tableUpdateInput, account_tableUncheckedUpdateInput>
  }

  /**
   * account_table delete
   */
  export type account_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
    /**
     * Filter which account_table to delete.
     */
    where: account_tableWhereUniqueInput
  }

  /**
   * account_table deleteMany
   */
  export type account_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_tables to delete
     */
    where?: account_tableWhereInput
    /**
     * Limit how many account_tables to delete.
     */
    limit?: number
  }

  /**
   * account_table.transaction_table
   */
  export type account_table$transaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    cursor?: transaction_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }

  /**
   * account_table.properties_table
   */
  export type account_table$properties_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    where?: properties_tableWhereInput
    orderBy?: properties_tableOrderByWithRelationInput | properties_tableOrderByWithRelationInput[]
    cursor?: properties_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Properties_tableScalarFieldEnum | Properties_tableScalarFieldEnum[]
  }

  /**
   * account_table.user_review
   */
  export type account_table$user_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    where?: user_reviewWhereInput
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    cursor?: user_reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * account_table.booked_user_list
   */
  export type account_table$booked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    where?: booked_user_listWhereInput
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    cursor?: booked_user_listWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * account_table without action
   */
  export type account_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_table
     */
    select?: account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_table
     */
    omit?: account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_tableInclude<ExtArgs> | null
  }


  /**
   * Model transaction_table
   */

  export type AggregateTransaction_table = {
    _count: Transaction_tableCountAggregateOutputType | null
    _avg: Transaction_tableAvgAggregateOutputType | null
    _sum: Transaction_tableSumAggregateOutputType | null
    _min: Transaction_tableMinAggregateOutputType | null
    _max: Transaction_tableMaxAggregateOutputType | null
  }

  export type Transaction_tableAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    price: number | null
    quantity: number | null
  }

  export type Transaction_tableSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    price: number | null
    quantity: number | null
  }

  export type Transaction_tableMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    price: number | null
    booking_date_start: Date | null
    booking_date_end: Date | null
    payment_proof_url: string | null
    created_at: Date | null
    expires_at: Date | null
    quantity: number | null
    transaction_status: $Enums.trx_status | null
  }

  export type Transaction_tableMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    price: number | null
    booking_date_start: Date | null
    booking_date_end: Date | null
    payment_proof_url: string | null
    created_at: Date | null
    expires_at: Date | null
    quantity: number | null
    transaction_status: $Enums.trx_status | null
  }

  export type Transaction_tableCountAggregateOutputType = {
    id: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: number
    booking_date_end: number
    payment_proof_url: number
    created_at: number
    expires_at: number
    quantity: number
    transaction_status: number
    _all: number
  }


  export type Transaction_tableAvgAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    price?: true
    quantity?: true
  }

  export type Transaction_tableSumAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    price?: true
    quantity?: true
  }

  export type Transaction_tableMinAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    price?: true
    booking_date_start?: true
    booking_date_end?: true
    payment_proof_url?: true
    created_at?: true
    expires_at?: true
    quantity?: true
    transaction_status?: true
  }

  export type Transaction_tableMaxAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    price?: true
    booking_date_start?: true
    booking_date_end?: true
    payment_proof_url?: true
    created_at?: true
    expires_at?: true
    quantity?: true
    transaction_status?: true
  }

  export type Transaction_tableCountAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    price?: true
    booking_date_start?: true
    booking_date_end?: true
    payment_proof_url?: true
    created_at?: true
    expires_at?: true
    quantity?: true
    transaction_status?: true
    _all?: true
  }

  export type Transaction_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_table to aggregate.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_tables
    **/
    _count?: true | Transaction_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_tableMaxAggregateInputType
  }

  export type GetTransaction_tableAggregateType<T extends Transaction_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_table[P]>
      : GetScalarType<T[P], AggregateTransaction_table[P]>
  }




  export type transaction_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithAggregationInput | transaction_tableOrderByWithAggregationInput[]
    by: Transaction_tableScalarFieldEnum[] | Transaction_tableScalarFieldEnum
    having?: transaction_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_tableCountAggregateInputType | true
    _avg?: Transaction_tableAvgAggregateInputType
    _sum?: Transaction_tableSumAggregateInputType
    _min?: Transaction_tableMinAggregateInputType
    _max?: Transaction_tableMaxAggregateInputType
  }

  export type Transaction_tableGroupByOutputType = {
    id: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: Date
    booking_date_end: Date
    payment_proof_url: string
    created_at: Date
    expires_at: Date
    quantity: number
    transaction_status: $Enums.trx_status
    _count: Transaction_tableCountAggregateOutputType | null
    _avg: Transaction_tableAvgAggregateOutputType | null
    _sum: Transaction_tableSumAggregateOutputType | null
    _min: Transaction_tableMinAggregateOutputType | null
    _max: Transaction_tableMaxAggregateOutputType | null
  }

  type GetTransaction_tableGroupByPayload<T extends transaction_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_tableGroupByOutputType[P]>
        }
      >
    >


  export type transaction_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    price?: boolean
    booking_date_start?: boolean
    booking_date_end?: boolean
    payment_proof_url?: boolean
    created_at?: boolean
    expires_at?: boolean
    quantity?: boolean
    transaction_status?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    user_review?: boolean | transaction_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | transaction_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Transaction_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_table"]>

  export type transaction_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    price?: boolean
    booking_date_start?: boolean
    booking_date_end?: boolean
    payment_proof_url?: boolean
    created_at?: boolean
    expires_at?: boolean
    quantity?: boolean
    transaction_status?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_table"]>

  export type transaction_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    price?: boolean
    booking_date_start?: boolean
    booking_date_end?: boolean
    payment_proof_url?: boolean
    created_at?: boolean
    expires_at?: boolean
    quantity?: boolean
    transaction_status?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_table"]>

  export type transaction_tableSelectScalar = {
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    price?: boolean
    booking_date_start?: boolean
    booking_date_end?: boolean
    payment_proof_url?: boolean
    created_at?: boolean
    expires_at?: boolean
    quantity?: boolean
    transaction_status?: boolean
  }

  export type transaction_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "properties_id" | "price" | "booking_date_start" | "booking_date_end" | "payment_proof_url" | "created_at" | "expires_at" | "quantity" | "transaction_status", ExtArgs["result"]["transaction_table"]>
  export type transaction_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    user_review?: boolean | transaction_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | transaction_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Transaction_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaction_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
  }
  export type transaction_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
  }

  export type $transaction_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_table"
    objects: {
      account_table: Prisma.$account_tablePayload<ExtArgs>
      properties_table: Prisma.$properties_tablePayload<ExtArgs>
      user_review: Prisma.$user_reviewPayload<ExtArgs>[]
      booked_user_list: Prisma.$booked_user_listPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      properties_id: number
      price: number
      booking_date_start: Date
      booking_date_end: Date
      payment_proof_url: string
      created_at: Date
      expires_at: Date
      quantity: number
      transaction_status: $Enums.trx_status
    }, ExtArgs["result"]["transaction_table"]>
    composites: {}
  }

  type transaction_tableGetPayload<S extends boolean | null | undefined | transaction_tableDefaultArgs> = $Result.GetResult<Prisma.$transaction_tablePayload, S>

  type transaction_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_tableCountAggregateInputType | true
    }

  export interface transaction_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_table'], meta: { name: 'transaction_table' } }
    /**
     * Find zero or one Transaction_table that matches the filter.
     * @param {transaction_tableFindUniqueArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_tableFindUniqueArgs>(args: SelectSubset<T, transaction_tableFindUniqueArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_tableFindUniqueOrThrowArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindFirstArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_tableFindFirstArgs>(args?: SelectSubset<T, transaction_tableFindFirstArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindFirstOrThrowArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_tables
     * const transaction_tables = await prisma.transaction_table.findMany()
     * 
     * // Get first 10 Transaction_tables
     * const transaction_tables = await prisma.transaction_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_tableWithIdOnly = await prisma.transaction_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_tableFindManyArgs>(args?: SelectSubset<T, transaction_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_table.
     * @param {transaction_tableCreateArgs} args - Arguments to create a Transaction_table.
     * @example
     * // Create one Transaction_table
     * const Transaction_table = await prisma.transaction_table.create({
     *   data: {
     *     // ... data to create a Transaction_table
     *   }
     * })
     * 
     */
    create<T extends transaction_tableCreateArgs>(args: SelectSubset<T, transaction_tableCreateArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_tables.
     * @param {transaction_tableCreateManyArgs} args - Arguments to create many Transaction_tables.
     * @example
     * // Create many Transaction_tables
     * const transaction_table = await prisma.transaction_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_tableCreateManyArgs>(args?: SelectSubset<T, transaction_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_tables and returns the data saved in the database.
     * @param {transaction_tableCreateManyAndReturnArgs} args - Arguments to create many Transaction_tables.
     * @example
     * // Create many Transaction_tables
     * const transaction_table = await prisma.transaction_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_tables and only return the `id`
     * const transaction_tableWithIdOnly = await prisma.transaction_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_table.
     * @param {transaction_tableDeleteArgs} args - Arguments to delete one Transaction_table.
     * @example
     * // Delete one Transaction_table
     * const Transaction_table = await prisma.transaction_table.delete({
     *   where: {
     *     // ... filter to delete one Transaction_table
     *   }
     * })
     * 
     */
    delete<T extends transaction_tableDeleteArgs>(args: SelectSubset<T, transaction_tableDeleteArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_table.
     * @param {transaction_tableUpdateArgs} args - Arguments to update one Transaction_table.
     * @example
     * // Update one Transaction_table
     * const transaction_table = await prisma.transaction_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_tableUpdateArgs>(args: SelectSubset<T, transaction_tableUpdateArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_tables.
     * @param {transaction_tableDeleteManyArgs} args - Arguments to filter Transaction_tables to delete.
     * @example
     * // Delete a few Transaction_tables
     * const { count } = await prisma.transaction_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_tableDeleteManyArgs>(args?: SelectSubset<T, transaction_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_tables
     * const transaction_table = await prisma.transaction_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_tableUpdateManyArgs>(args: SelectSubset<T, transaction_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_tables and returns the data updated in the database.
     * @param {transaction_tableUpdateManyAndReturnArgs} args - Arguments to update many Transaction_tables.
     * @example
     * // Update many Transaction_tables
     * const transaction_table = await prisma.transaction_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_tables and only return the `id`
     * const transaction_tableWithIdOnly = await prisma.transaction_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaction_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_table.
     * @param {transaction_tableUpsertArgs} args - Arguments to update or create a Transaction_table.
     * @example
     * // Update or create a Transaction_table
     * const transaction_table = await prisma.transaction_table.upsert({
     *   create: {
     *     // ... data to create a Transaction_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_table we want to update
     *   }
     * })
     */
    upsert<T extends transaction_tableUpsertArgs>(args: SelectSubset<T, transaction_tableUpsertArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableCountArgs} args - Arguments to filter Transaction_tables to count.
     * @example
     * // Count the number of Transaction_tables
     * const count = await prisma.transaction_table.count({
     *   where: {
     *     // ... the filter for the Transaction_tables we want to count
     *   }
     * })
    **/
    count<T extends transaction_tableCountArgs>(
      args?: Subset<T, transaction_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_tableAggregateArgs>(args: Subset<T, Transaction_tableAggregateArgs>): Prisma.PrismaPromise<GetTransaction_tableAggregateType<T>>

    /**
     * Group by Transaction_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_tableGroupByArgs['orderBy'] }
        : { orderBy?: transaction_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_table model
   */
  readonly fields: transaction_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_table<T extends account_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, account_tableDefaultArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties_table<T extends properties_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, properties_tableDefaultArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_review<T extends transaction_table$user_reviewArgs<ExtArgs> = {}>(args?: Subset<T, transaction_table$user_reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booked_user_list<T extends transaction_table$booked_user_listArgs<ExtArgs> = {}>(args?: Subset<T, transaction_table$booked_user_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction_table model
   */
  interface transaction_tableFieldRefs {
    readonly id: FieldRef<"transaction_table", 'Int'>
    readonly account_id: FieldRef<"transaction_table", 'Int'>
    readonly properties_id: FieldRef<"transaction_table", 'Int'>
    readonly price: FieldRef<"transaction_table", 'Int'>
    readonly booking_date_start: FieldRef<"transaction_table", 'DateTime'>
    readonly booking_date_end: FieldRef<"transaction_table", 'DateTime'>
    readonly payment_proof_url: FieldRef<"transaction_table", 'String'>
    readonly created_at: FieldRef<"transaction_table", 'DateTime'>
    readonly expires_at: FieldRef<"transaction_table", 'DateTime'>
    readonly quantity: FieldRef<"transaction_table", 'Int'>
    readonly transaction_status: FieldRef<"transaction_table", 'trx_status'>
  }
    

  // Custom InputTypes
  /**
   * transaction_table findUnique
   */
  export type transaction_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where: transaction_tableWhereUniqueInput
  }

  /**
   * transaction_table findUniqueOrThrow
   */
  export type transaction_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where: transaction_tableWhereUniqueInput
  }

  /**
   * transaction_table findFirst
   */
  export type transaction_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_tables.
     */
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }

  /**
   * transaction_table findFirstOrThrow
   */
  export type transaction_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_tables.
     */
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }

  /**
   * transaction_table findMany
   */
  export type transaction_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_tables to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }

  /**
   * transaction_table create
   */
  export type transaction_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_table.
     */
    data: XOR<transaction_tableCreateInput, transaction_tableUncheckedCreateInput>
  }

  /**
   * transaction_table createMany
   */
  export type transaction_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_tables.
     */
    data: transaction_tableCreateManyInput | transaction_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_table createManyAndReturn
   */
  export type transaction_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_tables.
     */
    data: transaction_tableCreateManyInput | transaction_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_table update
   */
  export type transaction_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_table.
     */
    data: XOR<transaction_tableUpdateInput, transaction_tableUncheckedUpdateInput>
    /**
     * Choose, which transaction_table to update.
     */
    where: transaction_tableWhereUniqueInput
  }

  /**
   * transaction_table updateMany
   */
  export type transaction_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_tables.
     */
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyInput>
    /**
     * Filter which transaction_tables to update
     */
    where?: transaction_tableWhereInput
    /**
     * Limit how many transaction_tables to update.
     */
    limit?: number
  }

  /**
   * transaction_table updateManyAndReturn
   */
  export type transaction_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * The data used to update transaction_tables.
     */
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyInput>
    /**
     * Filter which transaction_tables to update
     */
    where?: transaction_tableWhereInput
    /**
     * Limit how many transaction_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction_table upsert
   */
  export type transaction_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_table to update in case it exists.
     */
    where: transaction_tableWhereUniqueInput
    /**
     * In case the transaction_table found by the `where` argument doesn't exist, create a new transaction_table with this data.
     */
    create: XOR<transaction_tableCreateInput, transaction_tableUncheckedCreateInput>
    /**
     * In case the transaction_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_tableUpdateInput, transaction_tableUncheckedUpdateInput>
  }

  /**
   * transaction_table delete
   */
  export type transaction_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter which transaction_table to delete.
     */
    where: transaction_tableWhereUniqueInput
  }

  /**
   * transaction_table deleteMany
   */
  export type transaction_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_tables to delete
     */
    where?: transaction_tableWhereInput
    /**
     * Limit how many transaction_tables to delete.
     */
    limit?: number
  }

  /**
   * transaction_table.user_review
   */
  export type transaction_table$user_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    where?: user_reviewWhereInput
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    cursor?: user_reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * transaction_table.booked_user_list
   */
  export type transaction_table$booked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    where?: booked_user_listWhereInput
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    cursor?: booked_user_listWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * transaction_table without action
   */
  export type transaction_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
  }


  /**
   * Model properties_table
   */

  export type AggregateProperties_table = {
    _count: Properties_tableCountAggregateOutputType | null
    _avg: Properties_tableAvgAggregateOutputType | null
    _sum: Properties_tableSumAggregateOutputType | null
    _min: Properties_tableMinAggregateOutputType | null
    _max: Properties_tableMaxAggregateOutputType | null
  }

  export type Properties_tableAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    room_id: number | null
  }

  export type Properties_tableSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    room_id: number | null
  }

  export type Properties_tableMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    room_id: number | null
    name: string | null
    category: string | null
    address: string | null
    description: string | null
    city: string | null
    images: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Properties_tableMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    room_id: number | null
    name: string | null
    category: string | null
    address: string | null
    description: string | null
    city: string | null
    images: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Properties_tableCountAggregateOutputType = {
    id: number
    account_id: number
    room_id: number
    name: number
    category: number
    address: number
    description: number
    city: number
    images: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Properties_tableAvgAggregateInputType = {
    id?: true
    account_id?: true
    room_id?: true
  }

  export type Properties_tableSumAggregateInputType = {
    id?: true
    account_id?: true
    room_id?: true
  }

  export type Properties_tableMinAggregateInputType = {
    id?: true
    account_id?: true
    room_id?: true
    name?: true
    category?: true
    address?: true
    description?: true
    city?: true
    images?: true
    created_at?: true
    updated_at?: true
  }

  export type Properties_tableMaxAggregateInputType = {
    id?: true
    account_id?: true
    room_id?: true
    name?: true
    category?: true
    address?: true
    description?: true
    city?: true
    images?: true
    created_at?: true
    updated_at?: true
  }

  export type Properties_tableCountAggregateInputType = {
    id?: true
    account_id?: true
    room_id?: true
    name?: true
    category?: true
    address?: true
    description?: true
    city?: true
    images?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Properties_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties_table to aggregate.
     */
    where?: properties_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties_tables to fetch.
     */
    orderBy?: properties_tableOrderByWithRelationInput | properties_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: properties_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned properties_tables
    **/
    _count?: true | Properties_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Properties_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Properties_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Properties_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Properties_tableMaxAggregateInputType
  }

  export type GetProperties_tableAggregateType<T extends Properties_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateProperties_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperties_table[P]>
      : GetScalarType<T[P], AggregateProperties_table[P]>
  }




  export type properties_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: properties_tableWhereInput
    orderBy?: properties_tableOrderByWithAggregationInput | properties_tableOrderByWithAggregationInput[]
    by: Properties_tableScalarFieldEnum[] | Properties_tableScalarFieldEnum
    having?: properties_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Properties_tableCountAggregateInputType | true
    _avg?: Properties_tableAvgAggregateInputType
    _sum?: Properties_tableSumAggregateInputType
    _min?: Properties_tableMinAggregateInputType
    _max?: Properties_tableMaxAggregateInputType
  }

  export type Properties_tableGroupByOutputType = {
    id: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at: Date
    updated_at: Date
    _count: Properties_tableCountAggregateOutputType | null
    _avg: Properties_tableAvgAggregateOutputType | null
    _sum: Properties_tableSumAggregateOutputType | null
    _min: Properties_tableMinAggregateOutputType | null
    _max: Properties_tableMaxAggregateOutputType | null
  }

  type GetProperties_tableGroupByPayload<T extends properties_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Properties_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Properties_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Properties_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Properties_tableGroupByOutputType[P]>
        }
      >
    >


  export type properties_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    room_id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    description?: boolean
    city?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
    transaction_table?: boolean | properties_table$transaction_tableArgs<ExtArgs>
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    user_review?: boolean | properties_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | properties_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Properties_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties_table"]>

  export type properties_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    room_id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    description?: boolean
    city?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties_table"]>

  export type properties_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    room_id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    description?: boolean
    city?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties_table"]>

  export type properties_tableSelectScalar = {
    id?: boolean
    account_id?: boolean
    room_id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    description?: boolean
    city?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type properties_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "room_id" | "name" | "category" | "address" | "description" | "city" | "images" | "created_at" | "updated_at", ExtArgs["result"]["properties_table"]>
  export type properties_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | properties_table$transaction_tableArgs<ExtArgs>
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    user_review?: boolean | properties_table$user_reviewArgs<ExtArgs>
    booked_user_list?: boolean | properties_table$booked_user_listArgs<ExtArgs>
    _count?: boolean | Properties_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type properties_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
  }
  export type properties_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
  }

  export type $properties_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "properties_table"
    objects: {
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>[]
      account_table: Prisma.$account_tablePayload<ExtArgs>
      user_review: Prisma.$user_reviewPayload<ExtArgs>[]
      booked_user_list: Prisma.$booked_user_listPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      room_id: number
      name: string
      category: string
      address: string
      description: string
      city: string
      images: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["properties_table"]>
    composites: {}
  }

  type properties_tableGetPayload<S extends boolean | null | undefined | properties_tableDefaultArgs> = $Result.GetResult<Prisma.$properties_tablePayload, S>

  type properties_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<properties_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Properties_tableCountAggregateInputType | true
    }

  export interface properties_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['properties_table'], meta: { name: 'properties_table' } }
    /**
     * Find zero or one Properties_table that matches the filter.
     * @param {properties_tableFindUniqueArgs} args - Arguments to find a Properties_table
     * @example
     * // Get one Properties_table
     * const properties_table = await prisma.properties_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends properties_tableFindUniqueArgs>(args: SelectSubset<T, properties_tableFindUniqueArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Properties_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {properties_tableFindUniqueOrThrowArgs} args - Arguments to find a Properties_table
     * @example
     * // Get one Properties_table
     * const properties_table = await prisma.properties_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends properties_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, properties_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableFindFirstArgs} args - Arguments to find a Properties_table
     * @example
     * // Get one Properties_table
     * const properties_table = await prisma.properties_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends properties_tableFindFirstArgs>(args?: SelectSubset<T, properties_tableFindFirstArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableFindFirstOrThrowArgs} args - Arguments to find a Properties_table
     * @example
     * // Get one Properties_table
     * const properties_table = await prisma.properties_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends properties_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, properties_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties_tables
     * const properties_tables = await prisma.properties_table.findMany()
     * 
     * // Get first 10 Properties_tables
     * const properties_tables = await prisma.properties_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const properties_tableWithIdOnly = await prisma.properties_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends properties_tableFindManyArgs>(args?: SelectSubset<T, properties_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Properties_table.
     * @param {properties_tableCreateArgs} args - Arguments to create a Properties_table.
     * @example
     * // Create one Properties_table
     * const Properties_table = await prisma.properties_table.create({
     *   data: {
     *     // ... data to create a Properties_table
     *   }
     * })
     * 
     */
    create<T extends properties_tableCreateArgs>(args: SelectSubset<T, properties_tableCreateArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties_tables.
     * @param {properties_tableCreateManyArgs} args - Arguments to create many Properties_tables.
     * @example
     * // Create many Properties_tables
     * const properties_table = await prisma.properties_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends properties_tableCreateManyArgs>(args?: SelectSubset<T, properties_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties_tables and returns the data saved in the database.
     * @param {properties_tableCreateManyAndReturnArgs} args - Arguments to create many Properties_tables.
     * @example
     * // Create many Properties_tables
     * const properties_table = await prisma.properties_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties_tables and only return the `id`
     * const properties_tableWithIdOnly = await prisma.properties_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends properties_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, properties_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Properties_table.
     * @param {properties_tableDeleteArgs} args - Arguments to delete one Properties_table.
     * @example
     * // Delete one Properties_table
     * const Properties_table = await prisma.properties_table.delete({
     *   where: {
     *     // ... filter to delete one Properties_table
     *   }
     * })
     * 
     */
    delete<T extends properties_tableDeleteArgs>(args: SelectSubset<T, properties_tableDeleteArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Properties_table.
     * @param {properties_tableUpdateArgs} args - Arguments to update one Properties_table.
     * @example
     * // Update one Properties_table
     * const properties_table = await prisma.properties_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends properties_tableUpdateArgs>(args: SelectSubset<T, properties_tableUpdateArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties_tables.
     * @param {properties_tableDeleteManyArgs} args - Arguments to filter Properties_tables to delete.
     * @example
     * // Delete a few Properties_tables
     * const { count } = await prisma.properties_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends properties_tableDeleteManyArgs>(args?: SelectSubset<T, properties_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties_tables
     * const properties_table = await prisma.properties_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends properties_tableUpdateManyArgs>(args: SelectSubset<T, properties_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties_tables and returns the data updated in the database.
     * @param {properties_tableUpdateManyAndReturnArgs} args - Arguments to update many Properties_tables.
     * @example
     * // Update many Properties_tables
     * const properties_table = await prisma.properties_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties_tables and only return the `id`
     * const properties_tableWithIdOnly = await prisma.properties_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends properties_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, properties_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Properties_table.
     * @param {properties_tableUpsertArgs} args - Arguments to update or create a Properties_table.
     * @example
     * // Update or create a Properties_table
     * const properties_table = await prisma.properties_table.upsert({
     *   create: {
     *     // ... data to create a Properties_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Properties_table we want to update
     *   }
     * })
     */
    upsert<T extends properties_tableUpsertArgs>(args: SelectSubset<T, properties_tableUpsertArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableCountArgs} args - Arguments to filter Properties_tables to count.
     * @example
     * // Count the number of Properties_tables
     * const count = await prisma.properties_table.count({
     *   where: {
     *     // ... the filter for the Properties_tables we want to count
     *   }
     * })
    **/
    count<T extends properties_tableCountArgs>(
      args?: Subset<T, properties_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Properties_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Properties_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Properties_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Properties_tableAggregateArgs>(args: Subset<T, Properties_tableAggregateArgs>): Prisma.PrismaPromise<GetProperties_tableAggregateType<T>>

    /**
     * Group by Properties_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {properties_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends properties_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: properties_tableGroupByArgs['orderBy'] }
        : { orderBy?: properties_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, properties_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProperties_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the properties_table model
   */
  readonly fields: properties_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for properties_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__properties_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction_table<T extends properties_table$transaction_tableArgs<ExtArgs> = {}>(args?: Subset<T, properties_table$transaction_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account_table<T extends account_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, account_tableDefaultArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_review<T extends properties_table$user_reviewArgs<ExtArgs> = {}>(args?: Subset<T, properties_table$user_reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booked_user_list<T extends properties_table$booked_user_listArgs<ExtArgs> = {}>(args?: Subset<T, properties_table$booked_user_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the properties_table model
   */
  interface properties_tableFieldRefs {
    readonly id: FieldRef<"properties_table", 'Int'>
    readonly account_id: FieldRef<"properties_table", 'Int'>
    readonly room_id: FieldRef<"properties_table", 'Int'>
    readonly name: FieldRef<"properties_table", 'String'>
    readonly category: FieldRef<"properties_table", 'String'>
    readonly address: FieldRef<"properties_table", 'String'>
    readonly description: FieldRef<"properties_table", 'String'>
    readonly city: FieldRef<"properties_table", 'String'>
    readonly images: FieldRef<"properties_table", 'String'>
    readonly created_at: FieldRef<"properties_table", 'DateTime'>
    readonly updated_at: FieldRef<"properties_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * properties_table findUnique
   */
  export type properties_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter, which properties_table to fetch.
     */
    where: properties_tableWhereUniqueInput
  }

  /**
   * properties_table findUniqueOrThrow
   */
  export type properties_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter, which properties_table to fetch.
     */
    where: properties_tableWhereUniqueInput
  }

  /**
   * properties_table findFirst
   */
  export type properties_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter, which properties_table to fetch.
     */
    where?: properties_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties_tables to fetch.
     */
    orderBy?: properties_tableOrderByWithRelationInput | properties_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties_tables.
     */
    cursor?: properties_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties_tables.
     */
    distinct?: Properties_tableScalarFieldEnum | Properties_tableScalarFieldEnum[]
  }

  /**
   * properties_table findFirstOrThrow
   */
  export type properties_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter, which properties_table to fetch.
     */
    where?: properties_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties_tables to fetch.
     */
    orderBy?: properties_tableOrderByWithRelationInput | properties_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties_tables.
     */
    cursor?: properties_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties_tables.
     */
    distinct?: Properties_tableScalarFieldEnum | Properties_tableScalarFieldEnum[]
  }

  /**
   * properties_table findMany
   */
  export type properties_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter, which properties_tables to fetch.
     */
    where?: properties_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties_tables to fetch.
     */
    orderBy?: properties_tableOrderByWithRelationInput | properties_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing properties_tables.
     */
    cursor?: properties_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties_tables.
     */
    skip?: number
    distinct?: Properties_tableScalarFieldEnum | Properties_tableScalarFieldEnum[]
  }

  /**
   * properties_table create
   */
  export type properties_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a properties_table.
     */
    data: XOR<properties_tableCreateInput, properties_tableUncheckedCreateInput>
  }

  /**
   * properties_table createMany
   */
  export type properties_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many properties_tables.
     */
    data: properties_tableCreateManyInput | properties_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * properties_table createManyAndReturn
   */
  export type properties_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * The data used to create many properties_tables.
     */
    data: properties_tableCreateManyInput | properties_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * properties_table update
   */
  export type properties_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a properties_table.
     */
    data: XOR<properties_tableUpdateInput, properties_tableUncheckedUpdateInput>
    /**
     * Choose, which properties_table to update.
     */
    where: properties_tableWhereUniqueInput
  }

  /**
   * properties_table updateMany
   */
  export type properties_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update properties_tables.
     */
    data: XOR<properties_tableUpdateManyMutationInput, properties_tableUncheckedUpdateManyInput>
    /**
     * Filter which properties_tables to update
     */
    where?: properties_tableWhereInput
    /**
     * Limit how many properties_tables to update.
     */
    limit?: number
  }

  /**
   * properties_table updateManyAndReturn
   */
  export type properties_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * The data used to update properties_tables.
     */
    data: XOR<properties_tableUpdateManyMutationInput, properties_tableUncheckedUpdateManyInput>
    /**
     * Filter which properties_tables to update
     */
    where?: properties_tableWhereInput
    /**
     * Limit how many properties_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * properties_table upsert
   */
  export type properties_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the properties_table to update in case it exists.
     */
    where: properties_tableWhereUniqueInput
    /**
     * In case the properties_table found by the `where` argument doesn't exist, create a new properties_table with this data.
     */
    create: XOR<properties_tableCreateInput, properties_tableUncheckedCreateInput>
    /**
     * In case the properties_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<properties_tableUpdateInput, properties_tableUncheckedUpdateInput>
  }

  /**
   * properties_table delete
   */
  export type properties_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
    /**
     * Filter which properties_table to delete.
     */
    where: properties_tableWhereUniqueInput
  }

  /**
   * properties_table deleteMany
   */
  export type properties_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties_tables to delete
     */
    where?: properties_tableWhereInput
    /**
     * Limit how many properties_tables to delete.
     */
    limit?: number
  }

  /**
   * properties_table.transaction_table
   */
  export type properties_table$transaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_table
     */
    omit?: transaction_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_tableInclude<ExtArgs> | null
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    cursor?: transaction_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }

  /**
   * properties_table.user_review
   */
  export type properties_table$user_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    where?: user_reviewWhereInput
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    cursor?: user_reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * properties_table.booked_user_list
   */
  export type properties_table$booked_user_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    where?: booked_user_listWhereInput
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    cursor?: booked_user_listWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * properties_table without action
   */
  export type properties_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the properties_table
     */
    select?: properties_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the properties_table
     */
    omit?: properties_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: properties_tableInclude<ExtArgs> | null
  }


  /**
   * Model room_table
   */

  export type AggregateRoom_table = {
    _count: Room_tableCountAggregateOutputType | null
    _avg: Room_tableAvgAggregateOutputType | null
    _sum: Room_tableSumAggregateOutputType | null
    _min: Room_tableMinAggregateOutputType | null
    _max: Room_tableMaxAggregateOutputType | null
  }

  export type Room_tableAvgAggregateOutputType = {
    id: number | null
    properties_id: number | null
    capacity: number | null
    price: number | null
  }

  export type Room_tableSumAggregateOutputType = {
    id: number | null
    properties_id: number | null
    capacity: number | null
    price: number | null
  }

  export type Room_tableMinAggregateOutputType = {
    id: number | null
    properties_id: number | null
    name: string | null
    capacity: number | null
    price: number | null
    description: string | null
    images: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Room_tableMaxAggregateOutputType = {
    id: number | null
    properties_id: number | null
    name: string | null
    capacity: number | null
    price: number | null
    description: string | null
    images: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Room_tableCountAggregateOutputType = {
    id: number
    properties_id: number
    name: number
    capacity: number
    price: number
    description: number
    images: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Room_tableAvgAggregateInputType = {
    id?: true
    properties_id?: true
    capacity?: true
    price?: true
  }

  export type Room_tableSumAggregateInputType = {
    id?: true
    properties_id?: true
    capacity?: true
    price?: true
  }

  export type Room_tableMinAggregateInputType = {
    id?: true
    properties_id?: true
    name?: true
    capacity?: true
    price?: true
    description?: true
    images?: true
    created_at?: true
    updated_at?: true
  }

  export type Room_tableMaxAggregateInputType = {
    id?: true
    properties_id?: true
    name?: true
    capacity?: true
    price?: true
    description?: true
    images?: true
    created_at?: true
    updated_at?: true
  }

  export type Room_tableCountAggregateInputType = {
    id?: true
    properties_id?: true
    name?: true
    capacity?: true
    price?: true
    description?: true
    images?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Room_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_table to aggregate.
     */
    where?: room_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_tables to fetch.
     */
    orderBy?: room_tableOrderByWithRelationInput | room_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_tables
    **/
    _count?: true | Room_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Room_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Room_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_tableMaxAggregateInputType
  }

  export type GetRoom_tableAggregateType<T extends Room_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_table[P]>
      : GetScalarType<T[P], AggregateRoom_table[P]>
  }




  export type room_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_tableWhereInput
    orderBy?: room_tableOrderByWithAggregationInput | room_tableOrderByWithAggregationInput[]
    by: Room_tableScalarFieldEnum[] | Room_tableScalarFieldEnum
    having?: room_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_tableCountAggregateInputType | true
    _avg?: Room_tableAvgAggregateInputType
    _sum?: Room_tableSumAggregateInputType
    _min?: Room_tableMinAggregateInputType
    _max?: Room_tableMaxAggregateInputType
  }

  export type Room_tableGroupByOutputType = {
    id: number
    properties_id: number
    name: string
    capacity: number
    price: number
    description: string
    images: string
    created_at: Date
    updated_at: Date
    _count: Room_tableCountAggregateOutputType | null
    _avg: Room_tableAvgAggregateOutputType | null
    _sum: Room_tableSumAggregateOutputType | null
    _min: Room_tableMinAggregateOutputType | null
    _max: Room_tableMaxAggregateOutputType | null
  }

  type GetRoom_tableGroupByPayload<T extends room_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Room_tableGroupByOutputType[P]>
        }
      >
    >


  export type room_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    properties_id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["room_table"]>

  export type room_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    properties_id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["room_table"]>

  export type room_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    properties_id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["room_table"]>

  export type room_tableSelectScalar = {
    id?: boolean
    properties_id?: boolean
    name?: boolean
    capacity?: boolean
    price?: boolean
    description?: boolean
    images?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type room_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "properties_id" | "name" | "capacity" | "price" | "description" | "images" | "created_at" | "updated_at", ExtArgs["result"]["room_table"]>

  export type $room_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      properties_id: number
      name: string
      capacity: number
      price: number
      description: string
      images: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["room_table"]>
    composites: {}
  }

  type room_tableGetPayload<S extends boolean | null | undefined | room_tableDefaultArgs> = $Result.GetResult<Prisma.$room_tablePayload, S>

  type room_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_tableCountAggregateInputType | true
    }

  export interface room_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_table'], meta: { name: 'room_table' } }
    /**
     * Find zero or one Room_table that matches the filter.
     * @param {room_tableFindUniqueArgs} args - Arguments to find a Room_table
     * @example
     * // Get one Room_table
     * const room_table = await prisma.room_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_tableFindUniqueArgs>(args: SelectSubset<T, room_tableFindUniqueArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_tableFindUniqueOrThrowArgs} args - Arguments to find a Room_table
     * @example
     * // Get one Room_table
     * const room_table = await prisma.room_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, room_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableFindFirstArgs} args - Arguments to find a Room_table
     * @example
     * // Get one Room_table
     * const room_table = await prisma.room_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_tableFindFirstArgs>(args?: SelectSubset<T, room_tableFindFirstArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableFindFirstOrThrowArgs} args - Arguments to find a Room_table
     * @example
     * // Get one Room_table
     * const room_table = await prisma.room_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, room_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_tables
     * const room_tables = await prisma.room_table.findMany()
     * 
     * // Get first 10 Room_tables
     * const room_tables = await prisma.room_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_tableWithIdOnly = await prisma.room_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends room_tableFindManyArgs>(args?: SelectSubset<T, room_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_table.
     * @param {room_tableCreateArgs} args - Arguments to create a Room_table.
     * @example
     * // Create one Room_table
     * const Room_table = await prisma.room_table.create({
     *   data: {
     *     // ... data to create a Room_table
     *   }
     * })
     * 
     */
    create<T extends room_tableCreateArgs>(args: SelectSubset<T, room_tableCreateArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_tables.
     * @param {room_tableCreateManyArgs} args - Arguments to create many Room_tables.
     * @example
     * // Create many Room_tables
     * const room_table = await prisma.room_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_tableCreateManyArgs>(args?: SelectSubset<T, room_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_tables and returns the data saved in the database.
     * @param {room_tableCreateManyAndReturnArgs} args - Arguments to create many Room_tables.
     * @example
     * // Create many Room_tables
     * const room_table = await prisma.room_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_tables and only return the `id`
     * const room_tableWithIdOnly = await prisma.room_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, room_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_table.
     * @param {room_tableDeleteArgs} args - Arguments to delete one Room_table.
     * @example
     * // Delete one Room_table
     * const Room_table = await prisma.room_table.delete({
     *   where: {
     *     // ... filter to delete one Room_table
     *   }
     * })
     * 
     */
    delete<T extends room_tableDeleteArgs>(args: SelectSubset<T, room_tableDeleteArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_table.
     * @param {room_tableUpdateArgs} args - Arguments to update one Room_table.
     * @example
     * // Update one Room_table
     * const room_table = await prisma.room_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_tableUpdateArgs>(args: SelectSubset<T, room_tableUpdateArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_tables.
     * @param {room_tableDeleteManyArgs} args - Arguments to filter Room_tables to delete.
     * @example
     * // Delete a few Room_tables
     * const { count } = await prisma.room_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_tableDeleteManyArgs>(args?: SelectSubset<T, room_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_tables
     * const room_table = await prisma.room_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_tableUpdateManyArgs>(args: SelectSubset<T, room_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_tables and returns the data updated in the database.
     * @param {room_tableUpdateManyAndReturnArgs} args - Arguments to update many Room_tables.
     * @example
     * // Update many Room_tables
     * const room_table = await prisma.room_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_tables and only return the `id`
     * const room_tableWithIdOnly = await prisma.room_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends room_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, room_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_table.
     * @param {room_tableUpsertArgs} args - Arguments to update or create a Room_table.
     * @example
     * // Update or create a Room_table
     * const room_table = await prisma.room_table.upsert({
     *   create: {
     *     // ... data to create a Room_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_table we want to update
     *   }
     * })
     */
    upsert<T extends room_tableUpsertArgs>(args: SelectSubset<T, room_tableUpsertArgs<ExtArgs>>): Prisma__room_tableClient<$Result.GetResult<Prisma.$room_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableCountArgs} args - Arguments to filter Room_tables to count.
     * @example
     * // Count the number of Room_tables
     * const count = await prisma.room_table.count({
     *   where: {
     *     // ... the filter for the Room_tables we want to count
     *   }
     * })
    **/
    count<T extends room_tableCountArgs>(
      args?: Subset<T, room_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Room_tableAggregateArgs>(args: Subset<T, Room_tableAggregateArgs>): Prisma.PrismaPromise<GetRoom_tableAggregateType<T>>

    /**
     * Group by Room_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends room_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_tableGroupByArgs['orderBy'] }
        : { orderBy?: room_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, room_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_table model
   */
  readonly fields: room_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room_table model
   */
  interface room_tableFieldRefs {
    readonly id: FieldRef<"room_table", 'Int'>
    readonly properties_id: FieldRef<"room_table", 'Int'>
    readonly name: FieldRef<"room_table", 'String'>
    readonly capacity: FieldRef<"room_table", 'Int'>
    readonly price: FieldRef<"room_table", 'Int'>
    readonly description: FieldRef<"room_table", 'String'>
    readonly images: FieldRef<"room_table", 'String'>
    readonly created_at: FieldRef<"room_table", 'DateTime'>
    readonly updated_at: FieldRef<"room_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * room_table findUnique
   */
  export type room_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter, which room_table to fetch.
     */
    where: room_tableWhereUniqueInput
  }

  /**
   * room_table findUniqueOrThrow
   */
  export type room_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter, which room_table to fetch.
     */
    where: room_tableWhereUniqueInput
  }

  /**
   * room_table findFirst
   */
  export type room_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter, which room_table to fetch.
     */
    where?: room_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_tables to fetch.
     */
    orderBy?: room_tableOrderByWithRelationInput | room_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_tables.
     */
    cursor?: room_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_tables.
     */
    distinct?: Room_tableScalarFieldEnum | Room_tableScalarFieldEnum[]
  }

  /**
   * room_table findFirstOrThrow
   */
  export type room_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter, which room_table to fetch.
     */
    where?: room_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_tables to fetch.
     */
    orderBy?: room_tableOrderByWithRelationInput | room_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_tables.
     */
    cursor?: room_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_tables.
     */
    distinct?: Room_tableScalarFieldEnum | Room_tableScalarFieldEnum[]
  }

  /**
   * room_table findMany
   */
  export type room_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter, which room_tables to fetch.
     */
    where?: room_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_tables to fetch.
     */
    orderBy?: room_tableOrderByWithRelationInput | room_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_tables.
     */
    cursor?: room_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_tables.
     */
    skip?: number
    distinct?: Room_tableScalarFieldEnum | Room_tableScalarFieldEnum[]
  }

  /**
   * room_table create
   */
  export type room_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a room_table.
     */
    data: XOR<room_tableCreateInput, room_tableUncheckedCreateInput>
  }

  /**
   * room_table createMany
   */
  export type room_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_tables.
     */
    data: room_tableCreateManyInput | room_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_table createManyAndReturn
   */
  export type room_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * The data used to create many room_tables.
     */
    data: room_tableCreateManyInput | room_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_table update
   */
  export type room_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a room_table.
     */
    data: XOR<room_tableUpdateInput, room_tableUncheckedUpdateInput>
    /**
     * Choose, which room_table to update.
     */
    where: room_tableWhereUniqueInput
  }

  /**
   * room_table updateMany
   */
  export type room_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_tables.
     */
    data: XOR<room_tableUpdateManyMutationInput, room_tableUncheckedUpdateManyInput>
    /**
     * Filter which room_tables to update
     */
    where?: room_tableWhereInput
    /**
     * Limit how many room_tables to update.
     */
    limit?: number
  }

  /**
   * room_table updateManyAndReturn
   */
  export type room_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * The data used to update room_tables.
     */
    data: XOR<room_tableUpdateManyMutationInput, room_tableUncheckedUpdateManyInput>
    /**
     * Filter which room_tables to update
     */
    where?: room_tableWhereInput
    /**
     * Limit how many room_tables to update.
     */
    limit?: number
  }

  /**
   * room_table upsert
   */
  export type room_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the room_table to update in case it exists.
     */
    where: room_tableWhereUniqueInput
    /**
     * In case the room_table found by the `where` argument doesn't exist, create a new room_table with this data.
     */
    create: XOR<room_tableCreateInput, room_tableUncheckedCreateInput>
    /**
     * In case the room_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_tableUpdateInput, room_tableUncheckedUpdateInput>
  }

  /**
   * room_table delete
   */
  export type room_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
    /**
     * Filter which room_table to delete.
     */
    where: room_tableWhereUniqueInput
  }

  /**
   * room_table deleteMany
   */
  export type room_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_tables to delete
     */
    where?: room_tableWhereInput
    /**
     * Limit how many room_tables to delete.
     */
    limit?: number
  }

  /**
   * room_table without action
   */
  export type room_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_table
     */
    select?: room_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_table
     */
    omit?: room_tableOmit<ExtArgs> | null
  }


  /**
   * Model user_review
   */

  export type AggregateUser_review = {
    _count: User_reviewCountAggregateOutputType | null
    _avg: User_reviewAvgAggregateOutputType | null
    _sum: User_reviewSumAggregateOutputType | null
    _min: User_reviewMinAggregateOutputType | null
    _max: User_reviewMaxAggregateOutputType | null
  }

  export type User_reviewAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    transaction_id: number | null
    rating: number | null
  }

  export type User_reviewSumAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    transaction_id: number | null
    rating: number | null
  }

  export type User_reviewMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    transaction_id: number | null
    rating: number | null
    review: string | null
    created_at: Date | null
  }

  export type User_reviewMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    properties_id: number | null
    transaction_id: number | null
    rating: number | null
    review: string | null
    created_at: Date | null
  }

  export type User_reviewCountAggregateOutputType = {
    id: number
    account_id: number
    properties_id: number
    transaction_id: number
    rating: number
    review: number
    created_at: number
    _all: number
  }


  export type User_reviewAvgAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    transaction_id?: true
    rating?: true
  }

  export type User_reviewSumAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    transaction_id?: true
    rating?: true
  }

  export type User_reviewMinAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    transaction_id?: true
    rating?: true
    review?: true
    created_at?: true
  }

  export type User_reviewMaxAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    transaction_id?: true
    rating?: true
    review?: true
    created_at?: true
  }

  export type User_reviewCountAggregateInputType = {
    id?: true
    account_id?: true
    properties_id?: true
    transaction_id?: true
    rating?: true
    review?: true
    created_at?: true
    _all?: true
  }

  export type User_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_review to aggregate.
     */
    where?: user_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_reviews to fetch.
     */
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_reviews
    **/
    _count?: true | User_reviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_reviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_reviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_reviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_reviewMaxAggregateInputType
  }

  export type GetUser_reviewAggregateType<T extends User_reviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_review[P]>
      : GetScalarType<T[P], AggregateUser_review[P]>
  }




  export type user_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_reviewWhereInput
    orderBy?: user_reviewOrderByWithAggregationInput | user_reviewOrderByWithAggregationInput[]
    by: User_reviewScalarFieldEnum[] | User_reviewScalarFieldEnum
    having?: user_reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_reviewCountAggregateInputType | true
    _avg?: User_reviewAvgAggregateInputType
    _sum?: User_reviewSumAggregateInputType
    _min?: User_reviewMinAggregateInputType
    _max?: User_reviewMaxAggregateInputType
  }

  export type User_reviewGroupByOutputType = {
    id: number
    account_id: number
    properties_id: number
    transaction_id: number
    rating: number
    review: string
    created_at: Date
    _count: User_reviewCountAggregateOutputType | null
    _avg: User_reviewAvgAggregateOutputType | null
    _sum: User_reviewSumAggregateOutputType | null
    _min: User_reviewMinAggregateOutputType | null
    _max: User_reviewMaxAggregateOutputType | null
  }

  type GetUser_reviewGroupByPayload<T extends user_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_reviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_reviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_reviewGroupByOutputType[P]>
            : GetScalarType<T[P], User_reviewGroupByOutputType[P]>
        }
      >
    >


  export type user_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    transaction_id?: boolean
    rating?: boolean
    review?: boolean
    created_at?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_review"]>

  export type user_reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    transaction_id?: boolean
    rating?: boolean
    review?: boolean
    created_at?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_review"]>

  export type user_reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    transaction_id?: boolean
    rating?: boolean
    review?: boolean
    created_at?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_review"]>

  export type user_reviewSelectScalar = {
    id?: boolean
    account_id?: boolean
    properties_id?: boolean
    transaction_id?: boolean
    rating?: boolean
    review?: boolean
    created_at?: boolean
  }

  export type user_reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "properties_id" | "transaction_id" | "rating" | "review" | "created_at", ExtArgs["result"]["user_review"]>
  export type user_reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }
  export type user_reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }
  export type user_reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }

  export type $user_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_review"
    objects: {
      account_table: Prisma.$account_tablePayload<ExtArgs>
      properties_table: Prisma.$properties_tablePayload<ExtArgs>
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      properties_id: number
      transaction_id: number
      rating: number
      review: string
      created_at: Date
    }, ExtArgs["result"]["user_review"]>
    composites: {}
  }

  type user_reviewGetPayload<S extends boolean | null | undefined | user_reviewDefaultArgs> = $Result.GetResult<Prisma.$user_reviewPayload, S>

  type user_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_reviewCountAggregateInputType | true
    }

  export interface user_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_review'], meta: { name: 'user_review' } }
    /**
     * Find zero or one User_review that matches the filter.
     * @param {user_reviewFindUniqueArgs} args - Arguments to find a User_review
     * @example
     * // Get one User_review
     * const user_review = await prisma.user_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_reviewFindUniqueArgs>(args: SelectSubset<T, user_reviewFindUniqueArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_reviewFindUniqueOrThrowArgs} args - Arguments to find a User_review
     * @example
     * // Get one User_review
     * const user_review = await prisma.user_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, user_reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewFindFirstArgs} args - Arguments to find a User_review
     * @example
     * // Get one User_review
     * const user_review = await prisma.user_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_reviewFindFirstArgs>(args?: SelectSubset<T, user_reviewFindFirstArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewFindFirstOrThrowArgs} args - Arguments to find a User_review
     * @example
     * // Get one User_review
     * const user_review = await prisma.user_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, user_reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_reviews
     * const user_reviews = await prisma.user_review.findMany()
     * 
     * // Get first 10 User_reviews
     * const user_reviews = await prisma.user_review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_reviewWithIdOnly = await prisma.user_review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_reviewFindManyArgs>(args?: SelectSubset<T, user_reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_review.
     * @param {user_reviewCreateArgs} args - Arguments to create a User_review.
     * @example
     * // Create one User_review
     * const User_review = await prisma.user_review.create({
     *   data: {
     *     // ... data to create a User_review
     *   }
     * })
     * 
     */
    create<T extends user_reviewCreateArgs>(args: SelectSubset<T, user_reviewCreateArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_reviews.
     * @param {user_reviewCreateManyArgs} args - Arguments to create many User_reviews.
     * @example
     * // Create many User_reviews
     * const user_review = await prisma.user_review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_reviewCreateManyArgs>(args?: SelectSubset<T, user_reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_reviews and returns the data saved in the database.
     * @param {user_reviewCreateManyAndReturnArgs} args - Arguments to create many User_reviews.
     * @example
     * // Create many User_reviews
     * const user_review = await prisma.user_review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_reviews and only return the `id`
     * const user_reviewWithIdOnly = await prisma.user_review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, user_reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_review.
     * @param {user_reviewDeleteArgs} args - Arguments to delete one User_review.
     * @example
     * // Delete one User_review
     * const User_review = await prisma.user_review.delete({
     *   where: {
     *     // ... filter to delete one User_review
     *   }
     * })
     * 
     */
    delete<T extends user_reviewDeleteArgs>(args: SelectSubset<T, user_reviewDeleteArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_review.
     * @param {user_reviewUpdateArgs} args - Arguments to update one User_review.
     * @example
     * // Update one User_review
     * const user_review = await prisma.user_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_reviewUpdateArgs>(args: SelectSubset<T, user_reviewUpdateArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_reviews.
     * @param {user_reviewDeleteManyArgs} args - Arguments to filter User_reviews to delete.
     * @example
     * // Delete a few User_reviews
     * const { count } = await prisma.user_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_reviewDeleteManyArgs>(args?: SelectSubset<T, user_reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_reviews
     * const user_review = await prisma.user_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_reviewUpdateManyArgs>(args: SelectSubset<T, user_reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_reviews and returns the data updated in the database.
     * @param {user_reviewUpdateManyAndReturnArgs} args - Arguments to update many User_reviews.
     * @example
     * // Update many User_reviews
     * const user_review = await prisma.user_review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_reviews and only return the `id`
     * const user_reviewWithIdOnly = await prisma.user_review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, user_reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_review.
     * @param {user_reviewUpsertArgs} args - Arguments to update or create a User_review.
     * @example
     * // Update or create a User_review
     * const user_review = await prisma.user_review.upsert({
     *   create: {
     *     // ... data to create a User_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_review we want to update
     *   }
     * })
     */
    upsert<T extends user_reviewUpsertArgs>(args: SelectSubset<T, user_reviewUpsertArgs<ExtArgs>>): Prisma__user_reviewClient<$Result.GetResult<Prisma.$user_reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewCountArgs} args - Arguments to filter User_reviews to count.
     * @example
     * // Count the number of User_reviews
     * const count = await prisma.user_review.count({
     *   where: {
     *     // ... the filter for the User_reviews we want to count
     *   }
     * })
    **/
    count<T extends user_reviewCountArgs>(
      args?: Subset<T, user_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_reviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_reviewAggregateArgs>(args: Subset<T, User_reviewAggregateArgs>): Prisma.PrismaPromise<GetUser_reviewAggregateType<T>>

    /**
     * Group by User_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_reviewGroupByArgs['orderBy'] }
        : { orderBy?: user_reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_review model
   */
  readonly fields: user_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_table<T extends account_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, account_tableDefaultArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties_table<T extends properties_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, properties_tableDefaultArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction_table<T extends transaction_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_tableDefaultArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_review model
   */
  interface user_reviewFieldRefs {
    readonly id: FieldRef<"user_review", 'Int'>
    readonly account_id: FieldRef<"user_review", 'Int'>
    readonly properties_id: FieldRef<"user_review", 'Int'>
    readonly transaction_id: FieldRef<"user_review", 'Int'>
    readonly rating: FieldRef<"user_review", 'Int'>
    readonly review: FieldRef<"user_review", 'String'>
    readonly created_at: FieldRef<"user_review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_review findUnique
   */
  export type user_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter, which user_review to fetch.
     */
    where: user_reviewWhereUniqueInput
  }

  /**
   * user_review findUniqueOrThrow
   */
  export type user_reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter, which user_review to fetch.
     */
    where: user_reviewWhereUniqueInput
  }

  /**
   * user_review findFirst
   */
  export type user_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter, which user_review to fetch.
     */
    where?: user_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_reviews to fetch.
     */
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_reviews.
     */
    cursor?: user_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_reviews.
     */
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * user_review findFirstOrThrow
   */
  export type user_reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter, which user_review to fetch.
     */
    where?: user_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_reviews to fetch.
     */
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_reviews.
     */
    cursor?: user_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_reviews.
     */
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * user_review findMany
   */
  export type user_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter, which user_reviews to fetch.
     */
    where?: user_reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_reviews to fetch.
     */
    orderBy?: user_reviewOrderByWithRelationInput | user_reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_reviews.
     */
    cursor?: user_reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_reviews.
     */
    skip?: number
    distinct?: User_reviewScalarFieldEnum | User_reviewScalarFieldEnum[]
  }

  /**
   * user_review create
   */
  export type user_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a user_review.
     */
    data: XOR<user_reviewCreateInput, user_reviewUncheckedCreateInput>
  }

  /**
   * user_review createMany
   */
  export type user_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_reviews.
     */
    data: user_reviewCreateManyInput | user_reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_review createManyAndReturn
   */
  export type user_reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * The data used to create many user_reviews.
     */
    data: user_reviewCreateManyInput | user_reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_review update
   */
  export type user_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a user_review.
     */
    data: XOR<user_reviewUpdateInput, user_reviewUncheckedUpdateInput>
    /**
     * Choose, which user_review to update.
     */
    where: user_reviewWhereUniqueInput
  }

  /**
   * user_review updateMany
   */
  export type user_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_reviews.
     */
    data: XOR<user_reviewUpdateManyMutationInput, user_reviewUncheckedUpdateManyInput>
    /**
     * Filter which user_reviews to update
     */
    where?: user_reviewWhereInput
    /**
     * Limit how many user_reviews to update.
     */
    limit?: number
  }

  /**
   * user_review updateManyAndReturn
   */
  export type user_reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * The data used to update user_reviews.
     */
    data: XOR<user_reviewUpdateManyMutationInput, user_reviewUncheckedUpdateManyInput>
    /**
     * Filter which user_reviews to update
     */
    where?: user_reviewWhereInput
    /**
     * Limit how many user_reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_review upsert
   */
  export type user_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the user_review to update in case it exists.
     */
    where: user_reviewWhereUniqueInput
    /**
     * In case the user_review found by the `where` argument doesn't exist, create a new user_review with this data.
     */
    create: XOR<user_reviewCreateInput, user_reviewUncheckedCreateInput>
    /**
     * In case the user_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_reviewUpdateInput, user_reviewUncheckedUpdateInput>
  }

  /**
   * user_review delete
   */
  export type user_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
    /**
     * Filter which user_review to delete.
     */
    where: user_reviewWhereUniqueInput
  }

  /**
   * user_review deleteMany
   */
  export type user_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_reviews to delete
     */
    where?: user_reviewWhereInput
    /**
     * Limit how many user_reviews to delete.
     */
    limit?: number
  }

  /**
   * user_review without action
   */
  export type user_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_review
     */
    select?: user_reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_review
     */
    omit?: user_reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_reviewInclude<ExtArgs> | null
  }


  /**
   * Model booked_user_list
   */

  export type AggregateBooked_user_list = {
    _count: Booked_user_listCountAggregateOutputType | null
    _avg: Booked_user_listAvgAggregateOutputType | null
    _sum: Booked_user_listSumAggregateOutputType | null
    _min: Booked_user_listMinAggregateOutputType | null
    _max: Booked_user_listMaxAggregateOutputType | null
  }

  export type Booked_user_listAvgAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    account_id: number | null
    properties_id: number | null
    total_price: number | null
  }

  export type Booked_user_listSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    account_id: number | null
    properties_id: number | null
    total_price: number | null
  }

  export type Booked_user_listMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    account_id: number | null
    properties_id: number | null
    total_price: number | null
    booking_date_end: Date | null
  }

  export type Booked_user_listMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    account_id: number | null
    properties_id: number | null
    total_price: number | null
    booking_date_end: Date | null
  }

  export type Booked_user_listCountAggregateOutputType = {
    id: number
    transaction_id: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: number
    _all: number
  }


  export type Booked_user_listAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    account_id?: true
    properties_id?: true
    total_price?: true
  }

  export type Booked_user_listSumAggregateInputType = {
    id?: true
    transaction_id?: true
    account_id?: true
    properties_id?: true
    total_price?: true
  }

  export type Booked_user_listMinAggregateInputType = {
    id?: true
    transaction_id?: true
    account_id?: true
    properties_id?: true
    total_price?: true
    booking_date_end?: true
  }

  export type Booked_user_listMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    account_id?: true
    properties_id?: true
    total_price?: true
    booking_date_end?: true
  }

  export type Booked_user_listCountAggregateInputType = {
    id?: true
    transaction_id?: true
    account_id?: true
    properties_id?: true
    total_price?: true
    booking_date_end?: true
    _all?: true
  }

  export type Booked_user_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booked_user_list to aggregate.
     */
    where?: booked_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booked_user_lists to fetch.
     */
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booked_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booked_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booked_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned booked_user_lists
    **/
    _count?: true | Booked_user_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Booked_user_listAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Booked_user_listSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Booked_user_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Booked_user_listMaxAggregateInputType
  }

  export type GetBooked_user_listAggregateType<T extends Booked_user_listAggregateArgs> = {
        [P in keyof T & keyof AggregateBooked_user_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooked_user_list[P]>
      : GetScalarType<T[P], AggregateBooked_user_list[P]>
  }




  export type booked_user_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booked_user_listWhereInput
    orderBy?: booked_user_listOrderByWithAggregationInput | booked_user_listOrderByWithAggregationInput[]
    by: Booked_user_listScalarFieldEnum[] | Booked_user_listScalarFieldEnum
    having?: booked_user_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Booked_user_listCountAggregateInputType | true
    _avg?: Booked_user_listAvgAggregateInputType
    _sum?: Booked_user_listSumAggregateInputType
    _min?: Booked_user_listMinAggregateInputType
    _max?: Booked_user_listMaxAggregateInputType
  }

  export type Booked_user_listGroupByOutputType = {
    id: number
    transaction_id: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date
    _count: Booked_user_listCountAggregateOutputType | null
    _avg: Booked_user_listAvgAggregateOutputType | null
    _sum: Booked_user_listSumAggregateOutputType | null
    _min: Booked_user_listMinAggregateOutputType | null
    _max: Booked_user_listMaxAggregateOutputType | null
  }

  type GetBooked_user_listGroupByPayload<T extends booked_user_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Booked_user_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Booked_user_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Booked_user_listGroupByOutputType[P]>
            : GetScalarType<T[P], Booked_user_listGroupByOutputType[P]>
        }
      >
    >


  export type booked_user_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    account_id?: boolean
    properties_id?: boolean
    total_price?: boolean
    booking_date_end?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booked_user_list"]>

  export type booked_user_listSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    account_id?: boolean
    properties_id?: boolean
    total_price?: boolean
    booking_date_end?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booked_user_list"]>

  export type booked_user_listSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    account_id?: boolean
    properties_id?: boolean
    total_price?: boolean
    booking_date_end?: boolean
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booked_user_list"]>

  export type booked_user_listSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    account_id?: boolean
    properties_id?: boolean
    total_price?: boolean
    booking_date_end?: boolean
  }

  export type booked_user_listOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaction_id" | "account_id" | "properties_id" | "total_price" | "booking_date_end", ExtArgs["result"]["booked_user_list"]>
  export type booked_user_listInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }
  export type booked_user_listIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }
  export type booked_user_listIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_table?: boolean | account_tableDefaultArgs<ExtArgs>
    properties_table?: boolean | properties_tableDefaultArgs<ExtArgs>
    transaction_table?: boolean | transaction_tableDefaultArgs<ExtArgs>
  }

  export type $booked_user_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booked_user_list"
    objects: {
      account_table: Prisma.$account_tablePayload<ExtArgs>
      properties_table: Prisma.$properties_tablePayload<ExtArgs>
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      account_id: number
      properties_id: number
      total_price: number
      booking_date_end: Date
    }, ExtArgs["result"]["booked_user_list"]>
    composites: {}
  }

  type booked_user_listGetPayload<S extends boolean | null | undefined | booked_user_listDefaultArgs> = $Result.GetResult<Prisma.$booked_user_listPayload, S>

  type booked_user_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booked_user_listFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Booked_user_listCountAggregateInputType | true
    }

  export interface booked_user_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booked_user_list'], meta: { name: 'booked_user_list' } }
    /**
     * Find zero or one Booked_user_list that matches the filter.
     * @param {booked_user_listFindUniqueArgs} args - Arguments to find a Booked_user_list
     * @example
     * // Get one Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booked_user_listFindUniqueArgs>(args: SelectSubset<T, booked_user_listFindUniqueArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booked_user_list that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booked_user_listFindUniqueOrThrowArgs} args - Arguments to find a Booked_user_list
     * @example
     * // Get one Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booked_user_listFindUniqueOrThrowArgs>(args: SelectSubset<T, booked_user_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booked_user_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listFindFirstArgs} args - Arguments to find a Booked_user_list
     * @example
     * // Get one Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booked_user_listFindFirstArgs>(args?: SelectSubset<T, booked_user_listFindFirstArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booked_user_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listFindFirstOrThrowArgs} args - Arguments to find a Booked_user_list
     * @example
     * // Get one Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booked_user_listFindFirstOrThrowArgs>(args?: SelectSubset<T, booked_user_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booked_user_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booked_user_lists
     * const booked_user_lists = await prisma.booked_user_list.findMany()
     * 
     * // Get first 10 Booked_user_lists
     * const booked_user_lists = await prisma.booked_user_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booked_user_listWithIdOnly = await prisma.booked_user_list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends booked_user_listFindManyArgs>(args?: SelectSubset<T, booked_user_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booked_user_list.
     * @param {booked_user_listCreateArgs} args - Arguments to create a Booked_user_list.
     * @example
     * // Create one Booked_user_list
     * const Booked_user_list = await prisma.booked_user_list.create({
     *   data: {
     *     // ... data to create a Booked_user_list
     *   }
     * })
     * 
     */
    create<T extends booked_user_listCreateArgs>(args: SelectSubset<T, booked_user_listCreateArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booked_user_lists.
     * @param {booked_user_listCreateManyArgs} args - Arguments to create many Booked_user_lists.
     * @example
     * // Create many Booked_user_lists
     * const booked_user_list = await prisma.booked_user_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booked_user_listCreateManyArgs>(args?: SelectSubset<T, booked_user_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Booked_user_lists and returns the data saved in the database.
     * @param {booked_user_listCreateManyAndReturnArgs} args - Arguments to create many Booked_user_lists.
     * @example
     * // Create many Booked_user_lists
     * const booked_user_list = await prisma.booked_user_list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Booked_user_lists and only return the `id`
     * const booked_user_listWithIdOnly = await prisma.booked_user_list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends booked_user_listCreateManyAndReturnArgs>(args?: SelectSubset<T, booked_user_listCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booked_user_list.
     * @param {booked_user_listDeleteArgs} args - Arguments to delete one Booked_user_list.
     * @example
     * // Delete one Booked_user_list
     * const Booked_user_list = await prisma.booked_user_list.delete({
     *   where: {
     *     // ... filter to delete one Booked_user_list
     *   }
     * })
     * 
     */
    delete<T extends booked_user_listDeleteArgs>(args: SelectSubset<T, booked_user_listDeleteArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booked_user_list.
     * @param {booked_user_listUpdateArgs} args - Arguments to update one Booked_user_list.
     * @example
     * // Update one Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booked_user_listUpdateArgs>(args: SelectSubset<T, booked_user_listUpdateArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booked_user_lists.
     * @param {booked_user_listDeleteManyArgs} args - Arguments to filter Booked_user_lists to delete.
     * @example
     * // Delete a few Booked_user_lists
     * const { count } = await prisma.booked_user_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booked_user_listDeleteManyArgs>(args?: SelectSubset<T, booked_user_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booked_user_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booked_user_lists
     * const booked_user_list = await prisma.booked_user_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booked_user_listUpdateManyArgs>(args: SelectSubset<T, booked_user_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booked_user_lists and returns the data updated in the database.
     * @param {booked_user_listUpdateManyAndReturnArgs} args - Arguments to update many Booked_user_lists.
     * @example
     * // Update many Booked_user_lists
     * const booked_user_list = await prisma.booked_user_list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Booked_user_lists and only return the `id`
     * const booked_user_listWithIdOnly = await prisma.booked_user_list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends booked_user_listUpdateManyAndReturnArgs>(args: SelectSubset<T, booked_user_listUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booked_user_list.
     * @param {booked_user_listUpsertArgs} args - Arguments to update or create a Booked_user_list.
     * @example
     * // Update or create a Booked_user_list
     * const booked_user_list = await prisma.booked_user_list.upsert({
     *   create: {
     *     // ... data to create a Booked_user_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booked_user_list we want to update
     *   }
     * })
     */
    upsert<T extends booked_user_listUpsertArgs>(args: SelectSubset<T, booked_user_listUpsertArgs<ExtArgs>>): Prisma__booked_user_listClient<$Result.GetResult<Prisma.$booked_user_listPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booked_user_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listCountArgs} args - Arguments to filter Booked_user_lists to count.
     * @example
     * // Count the number of Booked_user_lists
     * const count = await prisma.booked_user_list.count({
     *   where: {
     *     // ... the filter for the Booked_user_lists we want to count
     *   }
     * })
    **/
    count<T extends booked_user_listCountArgs>(
      args?: Subset<T, booked_user_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Booked_user_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booked_user_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Booked_user_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Booked_user_listAggregateArgs>(args: Subset<T, Booked_user_listAggregateArgs>): Prisma.PrismaPromise<GetBooked_user_listAggregateType<T>>

    /**
     * Group by Booked_user_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booked_user_listGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booked_user_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booked_user_listGroupByArgs['orderBy'] }
        : { orderBy?: booked_user_listGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booked_user_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooked_user_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booked_user_list model
   */
  readonly fields: booked_user_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booked_user_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booked_user_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_table<T extends account_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, account_tableDefaultArgs<ExtArgs>>): Prisma__account_tableClient<$Result.GetResult<Prisma.$account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties_table<T extends properties_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, properties_tableDefaultArgs<ExtArgs>>): Prisma__properties_tableClient<$Result.GetResult<Prisma.$properties_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction_table<T extends transaction_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_tableDefaultArgs<ExtArgs>>): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booked_user_list model
   */
  interface booked_user_listFieldRefs {
    readonly id: FieldRef<"booked_user_list", 'Int'>
    readonly transaction_id: FieldRef<"booked_user_list", 'Int'>
    readonly account_id: FieldRef<"booked_user_list", 'Int'>
    readonly properties_id: FieldRef<"booked_user_list", 'Int'>
    readonly total_price: FieldRef<"booked_user_list", 'Int'>
    readonly booking_date_end: FieldRef<"booked_user_list", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booked_user_list findUnique
   */
  export type booked_user_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter, which booked_user_list to fetch.
     */
    where: booked_user_listWhereUniqueInput
  }

  /**
   * booked_user_list findUniqueOrThrow
   */
  export type booked_user_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter, which booked_user_list to fetch.
     */
    where: booked_user_listWhereUniqueInput
  }

  /**
   * booked_user_list findFirst
   */
  export type booked_user_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter, which booked_user_list to fetch.
     */
    where?: booked_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booked_user_lists to fetch.
     */
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booked_user_lists.
     */
    cursor?: booked_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booked_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booked_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booked_user_lists.
     */
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * booked_user_list findFirstOrThrow
   */
  export type booked_user_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter, which booked_user_list to fetch.
     */
    where?: booked_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booked_user_lists to fetch.
     */
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booked_user_lists.
     */
    cursor?: booked_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booked_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booked_user_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booked_user_lists.
     */
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * booked_user_list findMany
   */
  export type booked_user_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter, which booked_user_lists to fetch.
     */
    where?: booked_user_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booked_user_lists to fetch.
     */
    orderBy?: booked_user_listOrderByWithRelationInput | booked_user_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing booked_user_lists.
     */
    cursor?: booked_user_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booked_user_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booked_user_lists.
     */
    skip?: number
    distinct?: Booked_user_listScalarFieldEnum | Booked_user_listScalarFieldEnum[]
  }

  /**
   * booked_user_list create
   */
  export type booked_user_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * The data needed to create a booked_user_list.
     */
    data: XOR<booked_user_listCreateInput, booked_user_listUncheckedCreateInput>
  }

  /**
   * booked_user_list createMany
   */
  export type booked_user_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many booked_user_lists.
     */
    data: booked_user_listCreateManyInput | booked_user_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booked_user_list createManyAndReturn
   */
  export type booked_user_listCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * The data used to create many booked_user_lists.
     */
    data: booked_user_listCreateManyInput | booked_user_listCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booked_user_list update
   */
  export type booked_user_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * The data needed to update a booked_user_list.
     */
    data: XOR<booked_user_listUpdateInput, booked_user_listUncheckedUpdateInput>
    /**
     * Choose, which booked_user_list to update.
     */
    where: booked_user_listWhereUniqueInput
  }

  /**
   * booked_user_list updateMany
   */
  export type booked_user_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update booked_user_lists.
     */
    data: XOR<booked_user_listUpdateManyMutationInput, booked_user_listUncheckedUpdateManyInput>
    /**
     * Filter which booked_user_lists to update
     */
    where?: booked_user_listWhereInput
    /**
     * Limit how many booked_user_lists to update.
     */
    limit?: number
  }

  /**
   * booked_user_list updateManyAndReturn
   */
  export type booked_user_listUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * The data used to update booked_user_lists.
     */
    data: XOR<booked_user_listUpdateManyMutationInput, booked_user_listUncheckedUpdateManyInput>
    /**
     * Filter which booked_user_lists to update
     */
    where?: booked_user_listWhereInput
    /**
     * Limit how many booked_user_lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booked_user_list upsert
   */
  export type booked_user_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * The filter to search for the booked_user_list to update in case it exists.
     */
    where: booked_user_listWhereUniqueInput
    /**
     * In case the booked_user_list found by the `where` argument doesn't exist, create a new booked_user_list with this data.
     */
    create: XOR<booked_user_listCreateInput, booked_user_listUncheckedCreateInput>
    /**
     * In case the booked_user_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booked_user_listUpdateInput, booked_user_listUncheckedUpdateInput>
  }

  /**
   * booked_user_list delete
   */
  export type booked_user_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
    /**
     * Filter which booked_user_list to delete.
     */
    where: booked_user_listWhereUniqueInput
  }

  /**
   * booked_user_list deleteMany
   */
  export type booked_user_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booked_user_lists to delete
     */
    where?: booked_user_listWhereInput
    /**
     * Limit how many booked_user_lists to delete.
     */
    limit?: number
  }

  /**
   * booked_user_list without action
   */
  export type booked_user_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booked_user_list
     */
    select?: booked_user_listSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booked_user_list
     */
    omit?: booked_user_listOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booked_user_listInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Account_tableScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    role: 'role',
    password: 'password',
    image: 'image',
    created_at: 'created_at'
  };

  export type Account_tableScalarFieldEnum = (typeof Account_tableScalarFieldEnum)[keyof typeof Account_tableScalarFieldEnum]


  export const Transaction_tableScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    properties_id: 'properties_id',
    price: 'price',
    booking_date_start: 'booking_date_start',
    booking_date_end: 'booking_date_end',
    payment_proof_url: 'payment_proof_url',
    created_at: 'created_at',
    expires_at: 'expires_at',
    quantity: 'quantity',
    transaction_status: 'transaction_status'
  };

  export type Transaction_tableScalarFieldEnum = (typeof Transaction_tableScalarFieldEnum)[keyof typeof Transaction_tableScalarFieldEnum]


  export const Properties_tableScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    room_id: 'room_id',
    name: 'name',
    category: 'category',
    address: 'address',
    description: 'description',
    city: 'city',
    images: 'images',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Properties_tableScalarFieldEnum = (typeof Properties_tableScalarFieldEnum)[keyof typeof Properties_tableScalarFieldEnum]


  export const Room_tableScalarFieldEnum: {
    id: 'id',
    properties_id: 'properties_id',
    name: 'name',
    capacity: 'capacity',
    price: 'price',
    description: 'description',
    images: 'images',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Room_tableScalarFieldEnum = (typeof Room_tableScalarFieldEnum)[keyof typeof Room_tableScalarFieldEnum]


  export const User_reviewScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    properties_id: 'properties_id',
    transaction_id: 'transaction_id',
    rating: 'rating',
    review: 'review',
    created_at: 'created_at'
  };

  export type User_reviewScalarFieldEnum = (typeof User_reviewScalarFieldEnum)[keyof typeof User_reviewScalarFieldEnum]


  export const Booked_user_listScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    account_id: 'account_id',
    properties_id: 'properties_id',
    total_price: 'total_price',
    booking_date_end: 'booking_date_end'
  };

  export type Booked_user_listScalarFieldEnum = (typeof Booked_user_listScalarFieldEnum)[keyof typeof Booked_user_listScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'account_role'
   */
  export type Enumaccount_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'account_role'>
    


  /**
   * Reference to a field of type 'account_role[]'
   */
  export type ListEnumaccount_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'account_role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'trx_status'
   */
  export type Enumtrx_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trx_status'>
    


  /**
   * Reference to a field of type 'trx_status[]'
   */
  export type ListEnumtrx_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trx_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type account_tableWhereInput = {
    AND?: account_tableWhereInput | account_tableWhereInput[]
    OR?: account_tableWhereInput[]
    NOT?: account_tableWhereInput | account_tableWhereInput[]
    id?: IntFilter<"account_table"> | number
    fullname?: StringFilter<"account_table"> | string
    username?: StringFilter<"account_table"> | string
    email?: StringFilter<"account_table"> | string
    role?: Enumaccount_roleFilter<"account_table"> | $Enums.account_role
    password?: StringFilter<"account_table"> | string
    image?: StringFilter<"account_table"> | string
    created_at?: DateTimeFilter<"account_table"> | Date | string
    transaction_table?: Transaction_tableListRelationFilter
    properties_table?: Properties_tableListRelationFilter
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }

  export type account_tableOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    transaction_table?: transaction_tableOrderByRelationAggregateInput
    properties_table?: properties_tableOrderByRelationAggregateInput
    user_review?: user_reviewOrderByRelationAggregateInput
    booked_user_list?: booked_user_listOrderByRelationAggregateInput
  }

  export type account_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: account_tableWhereInput | account_tableWhereInput[]
    OR?: account_tableWhereInput[]
    NOT?: account_tableWhereInput | account_tableWhereInput[]
    fullname?: StringFilter<"account_table"> | string
    role?: Enumaccount_roleFilter<"account_table"> | $Enums.account_role
    password?: StringFilter<"account_table"> | string
    image?: StringFilter<"account_table"> | string
    created_at?: DateTimeFilter<"account_table"> | Date | string
    transaction_table?: Transaction_tableListRelationFilter
    properties_table?: Properties_tableListRelationFilter
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }, "id" | "username" | "email">

  export type account_tableOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    _count?: account_tableCountOrderByAggregateInput
    _avg?: account_tableAvgOrderByAggregateInput
    _max?: account_tableMaxOrderByAggregateInput
    _min?: account_tableMinOrderByAggregateInput
    _sum?: account_tableSumOrderByAggregateInput
  }

  export type account_tableScalarWhereWithAggregatesInput = {
    AND?: account_tableScalarWhereWithAggregatesInput | account_tableScalarWhereWithAggregatesInput[]
    OR?: account_tableScalarWhereWithAggregatesInput[]
    NOT?: account_tableScalarWhereWithAggregatesInput | account_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"account_table"> | number
    fullname?: StringWithAggregatesFilter<"account_table"> | string
    username?: StringWithAggregatesFilter<"account_table"> | string
    email?: StringWithAggregatesFilter<"account_table"> | string
    role?: Enumaccount_roleWithAggregatesFilter<"account_table"> | $Enums.account_role
    password?: StringWithAggregatesFilter<"account_table"> | string
    image?: StringWithAggregatesFilter<"account_table"> | string
    created_at?: DateTimeWithAggregatesFilter<"account_table"> | Date | string
  }

  export type transaction_tableWhereInput = {
    AND?: transaction_tableWhereInput | transaction_tableWhereInput[]
    OR?: transaction_tableWhereInput[]
    NOT?: transaction_tableWhereInput | transaction_tableWhereInput[]
    id?: IntFilter<"transaction_table"> | number
    account_id?: IntFilter<"transaction_table"> | number
    properties_id?: IntFilter<"transaction_table"> | number
    price?: IntFilter<"transaction_table"> | number
    booking_date_start?: DateTimeFilter<"transaction_table"> | Date | string
    booking_date_end?: DateTimeFilter<"transaction_table"> | Date | string
    payment_proof_url?: StringFilter<"transaction_table"> | string
    created_at?: DateTimeFilter<"transaction_table"> | Date | string
    expires_at?: DateTimeFilter<"transaction_table"> | Date | string
    quantity?: IntFilter<"transaction_table"> | number
    transaction_status?: Enumtrx_statusFilter<"transaction_table"> | $Enums.trx_status
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }

  export type transaction_tableOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    booking_date_start?: SortOrder
    booking_date_end?: SortOrder
    payment_proof_url?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    quantity?: SortOrder
    transaction_status?: SortOrder
    account_table?: account_tableOrderByWithRelationInput
    properties_table?: properties_tableOrderByWithRelationInput
    user_review?: user_reviewOrderByRelationAggregateInput
    booked_user_list?: booked_user_listOrderByRelationAggregateInput
  }

  export type transaction_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaction_tableWhereInput | transaction_tableWhereInput[]
    OR?: transaction_tableWhereInput[]
    NOT?: transaction_tableWhereInput | transaction_tableWhereInput[]
    account_id?: IntFilter<"transaction_table"> | number
    properties_id?: IntFilter<"transaction_table"> | number
    price?: IntFilter<"transaction_table"> | number
    booking_date_start?: DateTimeFilter<"transaction_table"> | Date | string
    booking_date_end?: DateTimeFilter<"transaction_table"> | Date | string
    payment_proof_url?: StringFilter<"transaction_table"> | string
    created_at?: DateTimeFilter<"transaction_table"> | Date | string
    expires_at?: DateTimeFilter<"transaction_table"> | Date | string
    quantity?: IntFilter<"transaction_table"> | number
    transaction_status?: Enumtrx_statusFilter<"transaction_table"> | $Enums.trx_status
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }, "id">

  export type transaction_tableOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    booking_date_start?: SortOrder
    booking_date_end?: SortOrder
    payment_proof_url?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    quantity?: SortOrder
    transaction_status?: SortOrder
    _count?: transaction_tableCountOrderByAggregateInput
    _avg?: transaction_tableAvgOrderByAggregateInput
    _max?: transaction_tableMaxOrderByAggregateInput
    _min?: transaction_tableMinOrderByAggregateInput
    _sum?: transaction_tableSumOrderByAggregateInput
  }

  export type transaction_tableScalarWhereWithAggregatesInput = {
    AND?: transaction_tableScalarWhereWithAggregatesInput | transaction_tableScalarWhereWithAggregatesInput[]
    OR?: transaction_tableScalarWhereWithAggregatesInput[]
    NOT?: transaction_tableScalarWhereWithAggregatesInput | transaction_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction_table"> | number
    account_id?: IntWithAggregatesFilter<"transaction_table"> | number
    properties_id?: IntWithAggregatesFilter<"transaction_table"> | number
    price?: IntWithAggregatesFilter<"transaction_table"> | number
    booking_date_start?: DateTimeWithAggregatesFilter<"transaction_table"> | Date | string
    booking_date_end?: DateTimeWithAggregatesFilter<"transaction_table"> | Date | string
    payment_proof_url?: StringWithAggregatesFilter<"transaction_table"> | string
    created_at?: DateTimeWithAggregatesFilter<"transaction_table"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"transaction_table"> | Date | string
    quantity?: IntWithAggregatesFilter<"transaction_table"> | number
    transaction_status?: Enumtrx_statusWithAggregatesFilter<"transaction_table"> | $Enums.trx_status
  }

  export type properties_tableWhereInput = {
    AND?: properties_tableWhereInput | properties_tableWhereInput[]
    OR?: properties_tableWhereInput[]
    NOT?: properties_tableWhereInput | properties_tableWhereInput[]
    id?: IntFilter<"properties_table"> | number
    account_id?: IntFilter<"properties_table"> | number
    room_id?: IntFilter<"properties_table"> | number
    name?: StringFilter<"properties_table"> | string
    category?: StringFilter<"properties_table"> | string
    address?: StringFilter<"properties_table"> | string
    description?: StringFilter<"properties_table"> | string
    city?: StringFilter<"properties_table"> | string
    images?: StringFilter<"properties_table"> | string
    created_at?: DateTimeFilter<"properties_table"> | Date | string
    updated_at?: DateTimeFilter<"properties_table"> | Date | string
    transaction_table?: Transaction_tableListRelationFilter
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }

  export type properties_tableOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    description?: SortOrder
    city?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transaction_table?: transaction_tableOrderByRelationAggregateInput
    account_table?: account_tableOrderByWithRelationInput
    user_review?: user_reviewOrderByRelationAggregateInput
    booked_user_list?: booked_user_listOrderByRelationAggregateInput
  }

  export type properties_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: properties_tableWhereInput | properties_tableWhereInput[]
    OR?: properties_tableWhereInput[]
    NOT?: properties_tableWhereInput | properties_tableWhereInput[]
    account_id?: IntFilter<"properties_table"> | number
    room_id?: IntFilter<"properties_table"> | number
    name?: StringFilter<"properties_table"> | string
    category?: StringFilter<"properties_table"> | string
    address?: StringFilter<"properties_table"> | string
    description?: StringFilter<"properties_table"> | string
    city?: StringFilter<"properties_table"> | string
    images?: StringFilter<"properties_table"> | string
    created_at?: DateTimeFilter<"properties_table"> | Date | string
    updated_at?: DateTimeFilter<"properties_table"> | Date | string
    transaction_table?: Transaction_tableListRelationFilter
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    user_review?: User_reviewListRelationFilter
    booked_user_list?: Booked_user_listListRelationFilter
  }, "id">

  export type properties_tableOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    description?: SortOrder
    city?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: properties_tableCountOrderByAggregateInput
    _avg?: properties_tableAvgOrderByAggregateInput
    _max?: properties_tableMaxOrderByAggregateInput
    _min?: properties_tableMinOrderByAggregateInput
    _sum?: properties_tableSumOrderByAggregateInput
  }

  export type properties_tableScalarWhereWithAggregatesInput = {
    AND?: properties_tableScalarWhereWithAggregatesInput | properties_tableScalarWhereWithAggregatesInput[]
    OR?: properties_tableScalarWhereWithAggregatesInput[]
    NOT?: properties_tableScalarWhereWithAggregatesInput | properties_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"properties_table"> | number
    account_id?: IntWithAggregatesFilter<"properties_table"> | number
    room_id?: IntWithAggregatesFilter<"properties_table"> | number
    name?: StringWithAggregatesFilter<"properties_table"> | string
    category?: StringWithAggregatesFilter<"properties_table"> | string
    address?: StringWithAggregatesFilter<"properties_table"> | string
    description?: StringWithAggregatesFilter<"properties_table"> | string
    city?: StringWithAggregatesFilter<"properties_table"> | string
    images?: StringWithAggregatesFilter<"properties_table"> | string
    created_at?: DateTimeWithAggregatesFilter<"properties_table"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"properties_table"> | Date | string
  }

  export type room_tableWhereInput = {
    AND?: room_tableWhereInput | room_tableWhereInput[]
    OR?: room_tableWhereInput[]
    NOT?: room_tableWhereInput | room_tableWhereInput[]
    id?: IntFilter<"room_table"> | number
    properties_id?: IntFilter<"room_table"> | number
    name?: StringFilter<"room_table"> | string
    capacity?: IntFilter<"room_table"> | number
    price?: IntFilter<"room_table"> | number
    description?: StringFilter<"room_table"> | string
    images?: StringFilter<"room_table"> | string
    created_at?: DateTimeFilter<"room_table"> | Date | string
    updated_at?: DateTimeFilter<"room_table"> | Date | string
  }

  export type room_tableOrderByWithRelationInput = {
    id?: SortOrder
    properties_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: room_tableWhereInput | room_tableWhereInput[]
    OR?: room_tableWhereInput[]
    NOT?: room_tableWhereInput | room_tableWhereInput[]
    properties_id?: IntFilter<"room_table"> | number
    name?: StringFilter<"room_table"> | string
    capacity?: IntFilter<"room_table"> | number
    price?: IntFilter<"room_table"> | number
    description?: StringFilter<"room_table"> | string
    images?: StringFilter<"room_table"> | string
    created_at?: DateTimeFilter<"room_table"> | Date | string
    updated_at?: DateTimeFilter<"room_table"> | Date | string
  }, "id">

  export type room_tableOrderByWithAggregationInput = {
    id?: SortOrder
    properties_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: room_tableCountOrderByAggregateInput
    _avg?: room_tableAvgOrderByAggregateInput
    _max?: room_tableMaxOrderByAggregateInput
    _min?: room_tableMinOrderByAggregateInput
    _sum?: room_tableSumOrderByAggregateInput
  }

  export type room_tableScalarWhereWithAggregatesInput = {
    AND?: room_tableScalarWhereWithAggregatesInput | room_tableScalarWhereWithAggregatesInput[]
    OR?: room_tableScalarWhereWithAggregatesInput[]
    NOT?: room_tableScalarWhereWithAggregatesInput | room_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"room_table"> | number
    properties_id?: IntWithAggregatesFilter<"room_table"> | number
    name?: StringWithAggregatesFilter<"room_table"> | string
    capacity?: IntWithAggregatesFilter<"room_table"> | number
    price?: IntWithAggregatesFilter<"room_table"> | number
    description?: StringWithAggregatesFilter<"room_table"> | string
    images?: StringWithAggregatesFilter<"room_table"> | string
    created_at?: DateTimeWithAggregatesFilter<"room_table"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"room_table"> | Date | string
  }

  export type user_reviewWhereInput = {
    AND?: user_reviewWhereInput | user_reviewWhereInput[]
    OR?: user_reviewWhereInput[]
    NOT?: user_reviewWhereInput | user_reviewWhereInput[]
    id?: IntFilter<"user_review"> | number
    account_id?: IntFilter<"user_review"> | number
    properties_id?: IntFilter<"user_review"> | number
    transaction_id?: IntFilter<"user_review"> | number
    rating?: IntFilter<"user_review"> | number
    review?: StringFilter<"user_review"> | string
    created_at?: DateTimeFilter<"user_review"> | Date | string
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    transaction_table?: XOR<Transaction_tableScalarRelationFilter, transaction_tableWhereInput>
  }

  export type user_reviewOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    account_table?: account_tableOrderByWithRelationInput
    properties_table?: properties_tableOrderByWithRelationInput
    transaction_table?: transaction_tableOrderByWithRelationInput
  }

  export type user_reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_reviewWhereInput | user_reviewWhereInput[]
    OR?: user_reviewWhereInput[]
    NOT?: user_reviewWhereInput | user_reviewWhereInput[]
    account_id?: IntFilter<"user_review"> | number
    properties_id?: IntFilter<"user_review"> | number
    transaction_id?: IntFilter<"user_review"> | number
    rating?: IntFilter<"user_review"> | number
    review?: StringFilter<"user_review"> | string
    created_at?: DateTimeFilter<"user_review"> | Date | string
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    transaction_table?: XOR<Transaction_tableScalarRelationFilter, transaction_tableWhereInput>
  }, "id">

  export type user_reviewOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
    _count?: user_reviewCountOrderByAggregateInput
    _avg?: user_reviewAvgOrderByAggregateInput
    _max?: user_reviewMaxOrderByAggregateInput
    _min?: user_reviewMinOrderByAggregateInput
    _sum?: user_reviewSumOrderByAggregateInput
  }

  export type user_reviewScalarWhereWithAggregatesInput = {
    AND?: user_reviewScalarWhereWithAggregatesInput | user_reviewScalarWhereWithAggregatesInput[]
    OR?: user_reviewScalarWhereWithAggregatesInput[]
    NOT?: user_reviewScalarWhereWithAggregatesInput | user_reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_review"> | number
    account_id?: IntWithAggregatesFilter<"user_review"> | number
    properties_id?: IntWithAggregatesFilter<"user_review"> | number
    transaction_id?: IntWithAggregatesFilter<"user_review"> | number
    rating?: IntWithAggregatesFilter<"user_review"> | number
    review?: StringWithAggregatesFilter<"user_review"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_review"> | Date | string
  }

  export type booked_user_listWhereInput = {
    AND?: booked_user_listWhereInput | booked_user_listWhereInput[]
    OR?: booked_user_listWhereInput[]
    NOT?: booked_user_listWhereInput | booked_user_listWhereInput[]
    id?: IntFilter<"booked_user_list"> | number
    transaction_id?: IntFilter<"booked_user_list"> | number
    account_id?: IntFilter<"booked_user_list"> | number
    properties_id?: IntFilter<"booked_user_list"> | number
    total_price?: IntFilter<"booked_user_list"> | number
    booking_date_end?: DateTimeFilter<"booked_user_list"> | Date | string
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    transaction_table?: XOR<Transaction_tableScalarRelationFilter, transaction_tableWhereInput>
  }

  export type booked_user_listOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
    booking_date_end?: SortOrder
    account_table?: account_tableOrderByWithRelationInput
    properties_table?: properties_tableOrderByWithRelationInput
    transaction_table?: transaction_tableOrderByWithRelationInput
  }

  export type booked_user_listWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: booked_user_listWhereInput | booked_user_listWhereInput[]
    OR?: booked_user_listWhereInput[]
    NOT?: booked_user_listWhereInput | booked_user_listWhereInput[]
    transaction_id?: IntFilter<"booked_user_list"> | number
    account_id?: IntFilter<"booked_user_list"> | number
    properties_id?: IntFilter<"booked_user_list"> | number
    total_price?: IntFilter<"booked_user_list"> | number
    booking_date_end?: DateTimeFilter<"booked_user_list"> | Date | string
    account_table?: XOR<Account_tableScalarRelationFilter, account_tableWhereInput>
    properties_table?: XOR<Properties_tableScalarRelationFilter, properties_tableWhereInput>
    transaction_table?: XOR<Transaction_tableScalarRelationFilter, transaction_tableWhereInput>
  }, "id">

  export type booked_user_listOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
    booking_date_end?: SortOrder
    _count?: booked_user_listCountOrderByAggregateInput
    _avg?: booked_user_listAvgOrderByAggregateInput
    _max?: booked_user_listMaxOrderByAggregateInput
    _min?: booked_user_listMinOrderByAggregateInput
    _sum?: booked_user_listSumOrderByAggregateInput
  }

  export type booked_user_listScalarWhereWithAggregatesInput = {
    AND?: booked_user_listScalarWhereWithAggregatesInput | booked_user_listScalarWhereWithAggregatesInput[]
    OR?: booked_user_listScalarWhereWithAggregatesInput[]
    NOT?: booked_user_listScalarWhereWithAggregatesInput | booked_user_listScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"booked_user_list"> | number
    transaction_id?: IntWithAggregatesFilter<"booked_user_list"> | number
    account_id?: IntWithAggregatesFilter<"booked_user_list"> | number
    properties_id?: IntWithAggregatesFilter<"booked_user_list"> | number
    total_price?: IntWithAggregatesFilter<"booked_user_list"> | number
    booking_date_end?: DateTimeWithAggregatesFilter<"booked_user_list"> | Date | string
  }

  export type account_tableCreateInput = {
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
  }

  export type account_tableUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_tableCreateInput = {
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    account_table: account_tableCreateNestedOneWithoutTransaction_tableInput
    properties_table: properties_tableCreateNestedOneWithoutTransaction_tableInput
    user_review?: user_reviewCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateInput = {
    id?: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    user_review?: user_reviewUncheckedCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    account_table?: account_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    user_review?: user_reviewUncheckedUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableCreateManyInput = {
    id?: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
  }

  export type transaction_tableUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
  }

  export type transaction_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
  }

  export type properties_tableCreateInput = {
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutProperties_tableInput
    account_table: account_tableCreateNestedOneWithoutProperties_tableInput
    user_review?: user_reviewCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUncheckedCreateInput = {
    id?: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutProperties_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUpdateInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutProperties_tableNestedInput
    account_table?: account_tableUpdateOneRequiredWithoutProperties_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutProperties_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableCreateManyInput = {
    id?: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type properties_tableUpdateManyMutationInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type properties_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_tableCreateInput = {
    properties_id: number
    name: string
    capacity: number
    price: number
    description: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type room_tableUncheckedCreateInput = {
    id?: number
    properties_id: number
    name: string
    capacity: number
    price: number
    description: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type room_tableUpdateInput = {
    properties_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_tableCreateManyInput = {
    id?: number
    properties_id: number
    name: string
    capacity: number
    price: number
    description: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type room_tableUpdateManyMutationInput = {
    properties_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewCreateInput = {
    rating: number
    review: string
    created_at?: Date | string
    account_table: account_tableCreateNestedOneWithoutUser_reviewInput
    properties_table: properties_tableCreateNestedOneWithoutUser_reviewInput
    transaction_table: transaction_tableCreateNestedOneWithoutUser_reviewInput
  }

  export type user_reviewUncheckedCreateInput = {
    id?: number
    account_id: number
    properties_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type user_reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutUser_reviewNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutUser_reviewNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutUser_reviewNestedInput
  }

  export type user_reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewCreateManyInput = {
    id?: number
    account_id: number
    properties_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type user_reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listCreateInput = {
    total_price: number
    booking_date_end: Date | string
    account_table: account_tableCreateNestedOneWithoutBooked_user_listInput
    properties_table: properties_tableCreateNestedOneWithoutBooked_user_listInput
    transaction_table: transaction_tableCreateNestedOneWithoutBooked_user_listInput
  }

  export type booked_user_listUncheckedCreateInput = {
    id?: number
    transaction_id: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type booked_user_listUpdateInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
  }

  export type booked_user_listUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listCreateManyInput = {
    id?: number
    transaction_id: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type booked_user_listUpdateManyMutationInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumaccount_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.account_role | Enumaccount_roleFieldRefInput<$PrismaModel>
    in?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_roleFilter<$PrismaModel> | $Enums.account_role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Transaction_tableListRelationFilter = {
    every?: transaction_tableWhereInput
    some?: transaction_tableWhereInput
    none?: transaction_tableWhereInput
  }

  export type Properties_tableListRelationFilter = {
    every?: properties_tableWhereInput
    some?: properties_tableWhereInput
    none?: properties_tableWhereInput
  }

  export type User_reviewListRelationFilter = {
    every?: user_reviewWhereInput
    some?: user_reviewWhereInput
    none?: user_reviewWhereInput
  }

  export type Booked_user_listListRelationFilter = {
    every?: booked_user_listWhereInput
    some?: booked_user_listWhereInput
    none?: booked_user_listWhereInput
  }

  export type transaction_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type properties_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type booked_user_listOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type account_tableCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type account_tableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type account_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type account_tableMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type account_tableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumaccount_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.account_role | Enumaccount_roleFieldRefInput<$PrismaModel>
    in?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_roleWithAggregatesFilter<$PrismaModel> | $Enums.account_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccount_roleFilter<$PrismaModel>
    _max?: NestedEnumaccount_roleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumtrx_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.trx_status | Enumtrx_statusFieldRefInput<$PrismaModel>
    in?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtrx_statusFilter<$PrismaModel> | $Enums.trx_status
  }

  export type Account_tableScalarRelationFilter = {
    is?: account_tableWhereInput
    isNot?: account_tableWhereInput
  }

  export type Properties_tableScalarRelationFilter = {
    is?: properties_tableWhereInput
    isNot?: properties_tableWhereInput
  }

  export type transaction_tableCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    booking_date_start?: SortOrder
    booking_date_end?: SortOrder
    payment_proof_url?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    quantity?: SortOrder
    transaction_status?: SortOrder
  }

  export type transaction_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type transaction_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    booking_date_start?: SortOrder
    booking_date_end?: SortOrder
    payment_proof_url?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    quantity?: SortOrder
    transaction_status?: SortOrder
  }

  export type transaction_tableMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    booking_date_start?: SortOrder
    booking_date_end?: SortOrder
    payment_proof_url?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    quantity?: SortOrder
    transaction_status?: SortOrder
  }

  export type transaction_tableSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type Enumtrx_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.trx_status | Enumtrx_statusFieldRefInput<$PrismaModel>
    in?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtrx_statusWithAggregatesFilter<$PrismaModel> | $Enums.trx_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtrx_statusFilter<$PrismaModel>
    _max?: NestedEnumtrx_statusFilter<$PrismaModel>
  }

  export type properties_tableCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    description?: SortOrder
    city?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type properties_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
  }

  export type properties_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    description?: SortOrder
    city?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type properties_tableMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    description?: SortOrder
    city?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type properties_tableSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    room_id?: SortOrder
  }

  export type room_tableCountOrderByAggregateInput = {
    id?: SortOrder
    properties_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    properties_id?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
  }

  export type room_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    properties_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_tableMinOrderByAggregateInput = {
    id?: SortOrder
    properties_id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
    description?: SortOrder
    images?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type room_tableSumOrderByAggregateInput = {
    id?: SortOrder
    properties_id?: SortOrder
    capacity?: SortOrder
    price?: SortOrder
  }

  export type Transaction_tableScalarRelationFilter = {
    is?: transaction_tableWhereInput
    isNot?: transaction_tableWhereInput
  }

  export type user_reviewCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
  }

  export type user_reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
  }

  export type user_reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
  }

  export type user_reviewMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    created_at?: SortOrder
  }

  export type user_reviewSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    transaction_id?: SortOrder
    rating?: SortOrder
  }

  export type booked_user_listCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
    booking_date_end?: SortOrder
  }

  export type booked_user_listAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
  }

  export type booked_user_listMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
    booking_date_end?: SortOrder
  }

  export type booked_user_listMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
    booking_date_end?: SortOrder
  }

  export type booked_user_listSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    account_id?: SortOrder
    properties_id?: SortOrder
    total_price?: SortOrder
  }

  export type transaction_tableCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput> | transaction_tableCreateWithoutAccount_tableInput[] | transaction_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutAccount_tableInput | transaction_tableCreateOrConnectWithoutAccount_tableInput[]
    createMany?: transaction_tableCreateManyAccount_tableInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type properties_tableCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput> | properties_tableCreateWithoutAccount_tableInput[] | properties_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: properties_tableCreateOrConnectWithoutAccount_tableInput | properties_tableCreateOrConnectWithoutAccount_tableInput[]
    createMany?: properties_tableCreateManyAccount_tableInputEnvelope
    connect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
  }

  export type user_reviewCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput> | user_reviewCreateWithoutAccount_tableInput[] | user_reviewUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutAccount_tableInput | user_reviewCreateOrConnectWithoutAccount_tableInput[]
    createMany?: user_reviewCreateManyAccount_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput> | booked_user_listCreateWithoutAccount_tableInput[] | booked_user_listUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutAccount_tableInput | booked_user_listCreateOrConnectWithoutAccount_tableInput[]
    createMany?: booked_user_listCreateManyAccount_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type transaction_tableUncheckedCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput> | transaction_tableCreateWithoutAccount_tableInput[] | transaction_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutAccount_tableInput | transaction_tableCreateOrConnectWithoutAccount_tableInput[]
    createMany?: transaction_tableCreateManyAccount_tableInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type properties_tableUncheckedCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput> | properties_tableCreateWithoutAccount_tableInput[] | properties_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: properties_tableCreateOrConnectWithoutAccount_tableInput | properties_tableCreateOrConnectWithoutAccount_tableInput[]
    createMany?: properties_tableCreateManyAccount_tableInputEnvelope
    connect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
  }

  export type user_reviewUncheckedCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput> | user_reviewCreateWithoutAccount_tableInput[] | user_reviewUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutAccount_tableInput | user_reviewCreateOrConnectWithoutAccount_tableInput[]
    createMany?: user_reviewCreateManyAccount_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listUncheckedCreateNestedManyWithoutAccount_tableInput = {
    create?: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput> | booked_user_listCreateWithoutAccount_tableInput[] | booked_user_listUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutAccount_tableInput | booked_user_listCreateOrConnectWithoutAccount_tableInput[]
    createMany?: booked_user_listCreateManyAccount_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumaccount_roleFieldUpdateOperationsInput = {
    set?: $Enums.account_role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type transaction_tableUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput> | transaction_tableCreateWithoutAccount_tableInput[] | transaction_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutAccount_tableInput | transaction_tableCreateOrConnectWithoutAccount_tableInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutAccount_tableInput | transaction_tableUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: transaction_tableCreateManyAccount_tableInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutAccount_tableInput | transaction_tableUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutAccount_tableInput | transaction_tableUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type properties_tableUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput> | properties_tableCreateWithoutAccount_tableInput[] | properties_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: properties_tableCreateOrConnectWithoutAccount_tableInput | properties_tableCreateOrConnectWithoutAccount_tableInput[]
    upsert?: properties_tableUpsertWithWhereUniqueWithoutAccount_tableInput | properties_tableUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: properties_tableCreateManyAccount_tableInputEnvelope
    set?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    disconnect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    delete?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    connect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    update?: properties_tableUpdateWithWhereUniqueWithoutAccount_tableInput | properties_tableUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: properties_tableUpdateManyWithWhereWithoutAccount_tableInput | properties_tableUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: properties_tableScalarWhereInput | properties_tableScalarWhereInput[]
  }

  export type user_reviewUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput> | user_reviewCreateWithoutAccount_tableInput[] | user_reviewUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutAccount_tableInput | user_reviewCreateOrConnectWithoutAccount_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutAccount_tableInput | user_reviewUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: user_reviewCreateManyAccount_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutAccount_tableInput | user_reviewUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutAccount_tableInput | user_reviewUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput> | booked_user_listCreateWithoutAccount_tableInput[] | booked_user_listUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutAccount_tableInput | booked_user_listCreateOrConnectWithoutAccount_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutAccount_tableInput | booked_user_listUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: booked_user_listCreateManyAccount_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutAccount_tableInput | booked_user_listUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutAccount_tableInput | booked_user_listUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaction_tableUncheckedUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput> | transaction_tableCreateWithoutAccount_tableInput[] | transaction_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutAccount_tableInput | transaction_tableCreateOrConnectWithoutAccount_tableInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutAccount_tableInput | transaction_tableUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: transaction_tableCreateManyAccount_tableInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutAccount_tableInput | transaction_tableUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutAccount_tableInput | transaction_tableUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type properties_tableUncheckedUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput> | properties_tableCreateWithoutAccount_tableInput[] | properties_tableUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: properties_tableCreateOrConnectWithoutAccount_tableInput | properties_tableCreateOrConnectWithoutAccount_tableInput[]
    upsert?: properties_tableUpsertWithWhereUniqueWithoutAccount_tableInput | properties_tableUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: properties_tableCreateManyAccount_tableInputEnvelope
    set?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    disconnect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    delete?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    connect?: properties_tableWhereUniqueInput | properties_tableWhereUniqueInput[]
    update?: properties_tableUpdateWithWhereUniqueWithoutAccount_tableInput | properties_tableUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: properties_tableUpdateManyWithWhereWithoutAccount_tableInput | properties_tableUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: properties_tableScalarWhereInput | properties_tableScalarWhereInput[]
  }

  export type user_reviewUncheckedUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput> | user_reviewCreateWithoutAccount_tableInput[] | user_reviewUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutAccount_tableInput | user_reviewCreateOrConnectWithoutAccount_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutAccount_tableInput | user_reviewUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: user_reviewCreateManyAccount_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutAccount_tableInput | user_reviewUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutAccount_tableInput | user_reviewUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUncheckedUpdateManyWithoutAccount_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput> | booked_user_listCreateWithoutAccount_tableInput[] | booked_user_listUncheckedCreateWithoutAccount_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutAccount_tableInput | booked_user_listCreateOrConnectWithoutAccount_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutAccount_tableInput | booked_user_listUpsertWithWhereUniqueWithoutAccount_tableInput[]
    createMany?: booked_user_listCreateManyAccount_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutAccount_tableInput | booked_user_listUpdateWithWhereUniqueWithoutAccount_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutAccount_tableInput | booked_user_listUpdateManyWithWhereWithoutAccount_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type account_tableCreateNestedOneWithoutTransaction_tableInput = {
    create?: XOR<account_tableCreateWithoutTransaction_tableInput, account_tableUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutTransaction_tableInput
    connect?: account_tableWhereUniqueInput
  }

  export type properties_tableCreateNestedOneWithoutTransaction_tableInput = {
    create?: XOR<properties_tableCreateWithoutTransaction_tableInput, properties_tableUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutTransaction_tableInput
    connect?: properties_tableWhereUniqueInput
  }

  export type user_reviewCreateNestedManyWithoutTransaction_tableInput = {
    create?: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput> | user_reviewCreateWithoutTransaction_tableInput[] | user_reviewUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutTransaction_tableInput | user_reviewCreateOrConnectWithoutTransaction_tableInput[]
    createMany?: user_reviewCreateManyTransaction_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listCreateNestedManyWithoutTransaction_tableInput = {
    create?: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput> | booked_user_listCreateWithoutTransaction_tableInput[] | booked_user_listUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutTransaction_tableInput | booked_user_listCreateOrConnectWithoutTransaction_tableInput[]
    createMany?: booked_user_listCreateManyTransaction_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type user_reviewUncheckedCreateNestedManyWithoutTransaction_tableInput = {
    create?: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput> | user_reviewCreateWithoutTransaction_tableInput[] | user_reviewUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutTransaction_tableInput | user_reviewCreateOrConnectWithoutTransaction_tableInput[]
    createMany?: user_reviewCreateManyTransaction_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listUncheckedCreateNestedManyWithoutTransaction_tableInput = {
    create?: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput> | booked_user_listCreateWithoutTransaction_tableInput[] | booked_user_listUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutTransaction_tableInput | booked_user_listCreateOrConnectWithoutTransaction_tableInput[]
    createMany?: booked_user_listCreateManyTransaction_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type Enumtrx_statusFieldUpdateOperationsInput = {
    set?: $Enums.trx_status
  }

  export type account_tableUpdateOneRequiredWithoutTransaction_tableNestedInput = {
    create?: XOR<account_tableCreateWithoutTransaction_tableInput, account_tableUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutTransaction_tableInput
    upsert?: account_tableUpsertWithoutTransaction_tableInput
    connect?: account_tableWhereUniqueInput
    update?: XOR<XOR<account_tableUpdateToOneWithWhereWithoutTransaction_tableInput, account_tableUpdateWithoutTransaction_tableInput>, account_tableUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type properties_tableUpdateOneRequiredWithoutTransaction_tableNestedInput = {
    create?: XOR<properties_tableCreateWithoutTransaction_tableInput, properties_tableUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutTransaction_tableInput
    upsert?: properties_tableUpsertWithoutTransaction_tableInput
    connect?: properties_tableWhereUniqueInput
    update?: XOR<XOR<properties_tableUpdateToOneWithWhereWithoutTransaction_tableInput, properties_tableUpdateWithoutTransaction_tableInput>, properties_tableUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type user_reviewUpdateManyWithoutTransaction_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput> | user_reviewCreateWithoutTransaction_tableInput[] | user_reviewUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutTransaction_tableInput | user_reviewCreateOrConnectWithoutTransaction_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutTransaction_tableInput | user_reviewUpsertWithWhereUniqueWithoutTransaction_tableInput[]
    createMany?: user_reviewCreateManyTransaction_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutTransaction_tableInput | user_reviewUpdateWithWhereUniqueWithoutTransaction_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutTransaction_tableInput | user_reviewUpdateManyWithWhereWithoutTransaction_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUpdateManyWithoutTransaction_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput> | booked_user_listCreateWithoutTransaction_tableInput[] | booked_user_listUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutTransaction_tableInput | booked_user_listCreateOrConnectWithoutTransaction_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutTransaction_tableInput | booked_user_listUpsertWithWhereUniqueWithoutTransaction_tableInput[]
    createMany?: booked_user_listCreateManyTransaction_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutTransaction_tableInput | booked_user_listUpdateWithWhereUniqueWithoutTransaction_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutTransaction_tableInput | booked_user_listUpdateManyWithWhereWithoutTransaction_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type user_reviewUncheckedUpdateManyWithoutTransaction_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput> | user_reviewCreateWithoutTransaction_tableInput[] | user_reviewUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutTransaction_tableInput | user_reviewCreateOrConnectWithoutTransaction_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutTransaction_tableInput | user_reviewUpsertWithWhereUniqueWithoutTransaction_tableInput[]
    createMany?: user_reviewCreateManyTransaction_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutTransaction_tableInput | user_reviewUpdateWithWhereUniqueWithoutTransaction_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutTransaction_tableInput | user_reviewUpdateManyWithWhereWithoutTransaction_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUncheckedUpdateManyWithoutTransaction_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput> | booked_user_listCreateWithoutTransaction_tableInput[] | booked_user_listUncheckedCreateWithoutTransaction_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutTransaction_tableInput | booked_user_listCreateOrConnectWithoutTransaction_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutTransaction_tableInput | booked_user_listUpsertWithWhereUniqueWithoutTransaction_tableInput[]
    createMany?: booked_user_listCreateManyTransaction_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutTransaction_tableInput | booked_user_listUpdateWithWhereUniqueWithoutTransaction_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutTransaction_tableInput | booked_user_listUpdateManyWithWhereWithoutTransaction_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type transaction_tableCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput> | transaction_tableCreateWithoutProperties_tableInput[] | transaction_tableUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutProperties_tableInput | transaction_tableCreateOrConnectWithoutProperties_tableInput[]
    createMany?: transaction_tableCreateManyProperties_tableInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type account_tableCreateNestedOneWithoutProperties_tableInput = {
    create?: XOR<account_tableCreateWithoutProperties_tableInput, account_tableUncheckedCreateWithoutProperties_tableInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutProperties_tableInput
    connect?: account_tableWhereUniqueInput
  }

  export type user_reviewCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput> | user_reviewCreateWithoutProperties_tableInput[] | user_reviewUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutProperties_tableInput | user_reviewCreateOrConnectWithoutProperties_tableInput[]
    createMany?: user_reviewCreateManyProperties_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput> | booked_user_listCreateWithoutProperties_tableInput[] | booked_user_listUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutProperties_tableInput | booked_user_listCreateOrConnectWithoutProperties_tableInput[]
    createMany?: booked_user_listCreateManyProperties_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type transaction_tableUncheckedCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput> | transaction_tableCreateWithoutProperties_tableInput[] | transaction_tableUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutProperties_tableInput | transaction_tableCreateOrConnectWithoutProperties_tableInput[]
    createMany?: transaction_tableCreateManyProperties_tableInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type user_reviewUncheckedCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput> | user_reviewCreateWithoutProperties_tableInput[] | user_reviewUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutProperties_tableInput | user_reviewCreateOrConnectWithoutProperties_tableInput[]
    createMany?: user_reviewCreateManyProperties_tableInputEnvelope
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
  }

  export type booked_user_listUncheckedCreateNestedManyWithoutProperties_tableInput = {
    create?: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput> | booked_user_listCreateWithoutProperties_tableInput[] | booked_user_listUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutProperties_tableInput | booked_user_listCreateOrConnectWithoutProperties_tableInput[]
    createMany?: booked_user_listCreateManyProperties_tableInputEnvelope
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
  }

  export type transaction_tableUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput> | transaction_tableCreateWithoutProperties_tableInput[] | transaction_tableUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutProperties_tableInput | transaction_tableCreateOrConnectWithoutProperties_tableInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutProperties_tableInput | transaction_tableUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: transaction_tableCreateManyProperties_tableInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutProperties_tableInput | transaction_tableUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutProperties_tableInput | transaction_tableUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type account_tableUpdateOneRequiredWithoutProperties_tableNestedInput = {
    create?: XOR<account_tableCreateWithoutProperties_tableInput, account_tableUncheckedCreateWithoutProperties_tableInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutProperties_tableInput
    upsert?: account_tableUpsertWithoutProperties_tableInput
    connect?: account_tableWhereUniqueInput
    update?: XOR<XOR<account_tableUpdateToOneWithWhereWithoutProperties_tableInput, account_tableUpdateWithoutProperties_tableInput>, account_tableUncheckedUpdateWithoutProperties_tableInput>
  }

  export type user_reviewUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput> | user_reviewCreateWithoutProperties_tableInput[] | user_reviewUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutProperties_tableInput | user_reviewCreateOrConnectWithoutProperties_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutProperties_tableInput | user_reviewUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: user_reviewCreateManyProperties_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutProperties_tableInput | user_reviewUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutProperties_tableInput | user_reviewUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput> | booked_user_listCreateWithoutProperties_tableInput[] | booked_user_listUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutProperties_tableInput | booked_user_listCreateOrConnectWithoutProperties_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutProperties_tableInput | booked_user_listUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: booked_user_listCreateManyProperties_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutProperties_tableInput | booked_user_listUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutProperties_tableInput | booked_user_listUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type transaction_tableUncheckedUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput> | transaction_tableCreateWithoutProperties_tableInput[] | transaction_tableUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutProperties_tableInput | transaction_tableCreateOrConnectWithoutProperties_tableInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutProperties_tableInput | transaction_tableUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: transaction_tableCreateManyProperties_tableInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutProperties_tableInput | transaction_tableUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutProperties_tableInput | transaction_tableUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type user_reviewUncheckedUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput> | user_reviewCreateWithoutProperties_tableInput[] | user_reviewUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: user_reviewCreateOrConnectWithoutProperties_tableInput | user_reviewCreateOrConnectWithoutProperties_tableInput[]
    upsert?: user_reviewUpsertWithWhereUniqueWithoutProperties_tableInput | user_reviewUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: user_reviewCreateManyProperties_tableInputEnvelope
    set?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    disconnect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    delete?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    connect?: user_reviewWhereUniqueInput | user_reviewWhereUniqueInput[]
    update?: user_reviewUpdateWithWhereUniqueWithoutProperties_tableInput | user_reviewUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: user_reviewUpdateManyWithWhereWithoutProperties_tableInput | user_reviewUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
  }

  export type booked_user_listUncheckedUpdateManyWithoutProperties_tableNestedInput = {
    create?: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput> | booked_user_listCreateWithoutProperties_tableInput[] | booked_user_listUncheckedCreateWithoutProperties_tableInput[]
    connectOrCreate?: booked_user_listCreateOrConnectWithoutProperties_tableInput | booked_user_listCreateOrConnectWithoutProperties_tableInput[]
    upsert?: booked_user_listUpsertWithWhereUniqueWithoutProperties_tableInput | booked_user_listUpsertWithWhereUniqueWithoutProperties_tableInput[]
    createMany?: booked_user_listCreateManyProperties_tableInputEnvelope
    set?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    disconnect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    delete?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    connect?: booked_user_listWhereUniqueInput | booked_user_listWhereUniqueInput[]
    update?: booked_user_listUpdateWithWhereUniqueWithoutProperties_tableInput | booked_user_listUpdateWithWhereUniqueWithoutProperties_tableInput[]
    updateMany?: booked_user_listUpdateManyWithWhereWithoutProperties_tableInput | booked_user_listUpdateManyWithWhereWithoutProperties_tableInput[]
    deleteMany?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
  }

  export type account_tableCreateNestedOneWithoutUser_reviewInput = {
    create?: XOR<account_tableCreateWithoutUser_reviewInput, account_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutUser_reviewInput
    connect?: account_tableWhereUniqueInput
  }

  export type properties_tableCreateNestedOneWithoutUser_reviewInput = {
    create?: XOR<properties_tableCreateWithoutUser_reviewInput, properties_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutUser_reviewInput
    connect?: properties_tableWhereUniqueInput
  }

  export type transaction_tableCreateNestedOneWithoutUser_reviewInput = {
    create?: XOR<transaction_tableCreateWithoutUser_reviewInput, transaction_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUser_reviewInput
    connect?: transaction_tableWhereUniqueInput
  }

  export type account_tableUpdateOneRequiredWithoutUser_reviewNestedInput = {
    create?: XOR<account_tableCreateWithoutUser_reviewInput, account_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutUser_reviewInput
    upsert?: account_tableUpsertWithoutUser_reviewInput
    connect?: account_tableWhereUniqueInput
    update?: XOR<XOR<account_tableUpdateToOneWithWhereWithoutUser_reviewInput, account_tableUpdateWithoutUser_reviewInput>, account_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type properties_tableUpdateOneRequiredWithoutUser_reviewNestedInput = {
    create?: XOR<properties_tableCreateWithoutUser_reviewInput, properties_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutUser_reviewInput
    upsert?: properties_tableUpsertWithoutUser_reviewInput
    connect?: properties_tableWhereUniqueInput
    update?: XOR<XOR<properties_tableUpdateToOneWithWhereWithoutUser_reviewInput, properties_tableUpdateWithoutUser_reviewInput>, properties_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type transaction_tableUpdateOneRequiredWithoutUser_reviewNestedInput = {
    create?: XOR<transaction_tableCreateWithoutUser_reviewInput, transaction_tableUncheckedCreateWithoutUser_reviewInput>
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUser_reviewInput
    upsert?: transaction_tableUpsertWithoutUser_reviewInput
    connect?: transaction_tableWhereUniqueInput
    update?: XOR<XOR<transaction_tableUpdateToOneWithWhereWithoutUser_reviewInput, transaction_tableUpdateWithoutUser_reviewInput>, transaction_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type account_tableCreateNestedOneWithoutBooked_user_listInput = {
    create?: XOR<account_tableCreateWithoutBooked_user_listInput, account_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutBooked_user_listInput
    connect?: account_tableWhereUniqueInput
  }

  export type properties_tableCreateNestedOneWithoutBooked_user_listInput = {
    create?: XOR<properties_tableCreateWithoutBooked_user_listInput, properties_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutBooked_user_listInput
    connect?: properties_tableWhereUniqueInput
  }

  export type transaction_tableCreateNestedOneWithoutBooked_user_listInput = {
    create?: XOR<transaction_tableCreateWithoutBooked_user_listInput, transaction_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: transaction_tableCreateOrConnectWithoutBooked_user_listInput
    connect?: transaction_tableWhereUniqueInput
  }

  export type account_tableUpdateOneRequiredWithoutBooked_user_listNestedInput = {
    create?: XOR<account_tableCreateWithoutBooked_user_listInput, account_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: account_tableCreateOrConnectWithoutBooked_user_listInput
    upsert?: account_tableUpsertWithoutBooked_user_listInput
    connect?: account_tableWhereUniqueInput
    update?: XOR<XOR<account_tableUpdateToOneWithWhereWithoutBooked_user_listInput, account_tableUpdateWithoutBooked_user_listInput>, account_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type properties_tableUpdateOneRequiredWithoutBooked_user_listNestedInput = {
    create?: XOR<properties_tableCreateWithoutBooked_user_listInput, properties_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: properties_tableCreateOrConnectWithoutBooked_user_listInput
    upsert?: properties_tableUpsertWithoutBooked_user_listInput
    connect?: properties_tableWhereUniqueInput
    update?: XOR<XOR<properties_tableUpdateToOneWithWhereWithoutBooked_user_listInput, properties_tableUpdateWithoutBooked_user_listInput>, properties_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type transaction_tableUpdateOneRequiredWithoutBooked_user_listNestedInput = {
    create?: XOR<transaction_tableCreateWithoutBooked_user_listInput, transaction_tableUncheckedCreateWithoutBooked_user_listInput>
    connectOrCreate?: transaction_tableCreateOrConnectWithoutBooked_user_listInput
    upsert?: transaction_tableUpsertWithoutBooked_user_listInput
    connect?: transaction_tableWhereUniqueInput
    update?: XOR<XOR<transaction_tableUpdateToOneWithWhereWithoutBooked_user_listInput, transaction_tableUpdateWithoutBooked_user_listInput>, transaction_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumaccount_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.account_role | Enumaccount_roleFieldRefInput<$PrismaModel>
    in?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_roleFilter<$PrismaModel> | $Enums.account_role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumaccount_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.account_role | Enumaccount_roleFieldRefInput<$PrismaModel>
    in?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.account_role[] | ListEnumaccount_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumaccount_roleWithAggregatesFilter<$PrismaModel> | $Enums.account_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccount_roleFilter<$PrismaModel>
    _max?: NestedEnumaccount_roleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumtrx_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.trx_status | Enumtrx_statusFieldRefInput<$PrismaModel>
    in?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtrx_statusFilter<$PrismaModel> | $Enums.trx_status
  }

  export type NestedEnumtrx_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.trx_status | Enumtrx_statusFieldRefInput<$PrismaModel>
    in?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.trx_status[] | ListEnumtrx_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtrx_statusWithAggregatesFilter<$PrismaModel> | $Enums.trx_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtrx_statusFilter<$PrismaModel>
    _max?: NestedEnumtrx_statusFilter<$PrismaModel>
  }

  export type transaction_tableCreateWithoutAccount_tableInput = {
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    properties_table: properties_tableCreateNestedOneWithoutTransaction_tableInput
    user_review?: user_reviewCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutAccount_tableInput = {
    id?: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    user_review?: user_reviewUncheckedCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableCreateOrConnectWithoutAccount_tableInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput>
  }

  export type transaction_tableCreateManyAccount_tableInputEnvelope = {
    data: transaction_tableCreateManyAccount_tableInput | transaction_tableCreateManyAccount_tableInput[]
    skipDuplicates?: boolean
  }

  export type properties_tableCreateWithoutAccount_tableInput = {
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutProperties_tableInput
    user_review?: user_reviewCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUncheckedCreateWithoutAccount_tableInput = {
    id?: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutProperties_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableCreateOrConnectWithoutAccount_tableInput = {
    where: properties_tableWhereUniqueInput
    create: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput>
  }

  export type properties_tableCreateManyAccount_tableInputEnvelope = {
    data: properties_tableCreateManyAccount_tableInput | properties_tableCreateManyAccount_tableInput[]
    skipDuplicates?: boolean
  }

  export type user_reviewCreateWithoutAccount_tableInput = {
    rating: number
    review: string
    created_at?: Date | string
    properties_table: properties_tableCreateNestedOneWithoutUser_reviewInput
    transaction_table: transaction_tableCreateNestedOneWithoutUser_reviewInput
  }

  export type user_reviewUncheckedCreateWithoutAccount_tableInput = {
    id?: number
    properties_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type user_reviewCreateOrConnectWithoutAccount_tableInput = {
    where: user_reviewWhereUniqueInput
    create: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput>
  }

  export type user_reviewCreateManyAccount_tableInputEnvelope = {
    data: user_reviewCreateManyAccount_tableInput | user_reviewCreateManyAccount_tableInput[]
    skipDuplicates?: boolean
  }

  export type booked_user_listCreateWithoutAccount_tableInput = {
    total_price: number
    booking_date_end: Date | string
    properties_table: properties_tableCreateNestedOneWithoutBooked_user_listInput
    transaction_table: transaction_tableCreateNestedOneWithoutBooked_user_listInput
  }

  export type booked_user_listUncheckedCreateWithoutAccount_tableInput = {
    id?: number
    transaction_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type booked_user_listCreateOrConnectWithoutAccount_tableInput = {
    where: booked_user_listWhereUniqueInput
    create: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput>
  }

  export type booked_user_listCreateManyAccount_tableInputEnvelope = {
    data: booked_user_listCreateManyAccount_tableInput | booked_user_listCreateManyAccount_tableInput[]
    skipDuplicates?: boolean
  }

  export type transaction_tableUpsertWithWhereUniqueWithoutAccount_tableInput = {
    where: transaction_tableWhereUniqueInput
    update: XOR<transaction_tableUpdateWithoutAccount_tableInput, transaction_tableUncheckedUpdateWithoutAccount_tableInput>
    create: XOR<transaction_tableCreateWithoutAccount_tableInput, transaction_tableUncheckedCreateWithoutAccount_tableInput>
  }

  export type transaction_tableUpdateWithWhereUniqueWithoutAccount_tableInput = {
    where: transaction_tableWhereUniqueInput
    data: XOR<transaction_tableUpdateWithoutAccount_tableInput, transaction_tableUncheckedUpdateWithoutAccount_tableInput>
  }

  export type transaction_tableUpdateManyWithWhereWithoutAccount_tableInput = {
    where: transaction_tableScalarWhereInput
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyWithoutAccount_tableInput>
  }

  export type transaction_tableScalarWhereInput = {
    AND?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
    OR?: transaction_tableScalarWhereInput[]
    NOT?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
    id?: IntFilter<"transaction_table"> | number
    account_id?: IntFilter<"transaction_table"> | number
    properties_id?: IntFilter<"transaction_table"> | number
    price?: IntFilter<"transaction_table"> | number
    booking_date_start?: DateTimeFilter<"transaction_table"> | Date | string
    booking_date_end?: DateTimeFilter<"transaction_table"> | Date | string
    payment_proof_url?: StringFilter<"transaction_table"> | string
    created_at?: DateTimeFilter<"transaction_table"> | Date | string
    expires_at?: DateTimeFilter<"transaction_table"> | Date | string
    quantity?: IntFilter<"transaction_table"> | number
    transaction_status?: Enumtrx_statusFilter<"transaction_table"> | $Enums.trx_status
  }

  export type properties_tableUpsertWithWhereUniqueWithoutAccount_tableInput = {
    where: properties_tableWhereUniqueInput
    update: XOR<properties_tableUpdateWithoutAccount_tableInput, properties_tableUncheckedUpdateWithoutAccount_tableInput>
    create: XOR<properties_tableCreateWithoutAccount_tableInput, properties_tableUncheckedCreateWithoutAccount_tableInput>
  }

  export type properties_tableUpdateWithWhereUniqueWithoutAccount_tableInput = {
    where: properties_tableWhereUniqueInput
    data: XOR<properties_tableUpdateWithoutAccount_tableInput, properties_tableUncheckedUpdateWithoutAccount_tableInput>
  }

  export type properties_tableUpdateManyWithWhereWithoutAccount_tableInput = {
    where: properties_tableScalarWhereInput
    data: XOR<properties_tableUpdateManyMutationInput, properties_tableUncheckedUpdateManyWithoutAccount_tableInput>
  }

  export type properties_tableScalarWhereInput = {
    AND?: properties_tableScalarWhereInput | properties_tableScalarWhereInput[]
    OR?: properties_tableScalarWhereInput[]
    NOT?: properties_tableScalarWhereInput | properties_tableScalarWhereInput[]
    id?: IntFilter<"properties_table"> | number
    account_id?: IntFilter<"properties_table"> | number
    room_id?: IntFilter<"properties_table"> | number
    name?: StringFilter<"properties_table"> | string
    category?: StringFilter<"properties_table"> | string
    address?: StringFilter<"properties_table"> | string
    description?: StringFilter<"properties_table"> | string
    city?: StringFilter<"properties_table"> | string
    images?: StringFilter<"properties_table"> | string
    created_at?: DateTimeFilter<"properties_table"> | Date | string
    updated_at?: DateTimeFilter<"properties_table"> | Date | string
  }

  export type user_reviewUpsertWithWhereUniqueWithoutAccount_tableInput = {
    where: user_reviewWhereUniqueInput
    update: XOR<user_reviewUpdateWithoutAccount_tableInput, user_reviewUncheckedUpdateWithoutAccount_tableInput>
    create: XOR<user_reviewCreateWithoutAccount_tableInput, user_reviewUncheckedCreateWithoutAccount_tableInput>
  }

  export type user_reviewUpdateWithWhereUniqueWithoutAccount_tableInput = {
    where: user_reviewWhereUniqueInput
    data: XOR<user_reviewUpdateWithoutAccount_tableInput, user_reviewUncheckedUpdateWithoutAccount_tableInput>
  }

  export type user_reviewUpdateManyWithWhereWithoutAccount_tableInput = {
    where: user_reviewScalarWhereInput
    data: XOR<user_reviewUpdateManyMutationInput, user_reviewUncheckedUpdateManyWithoutAccount_tableInput>
  }

  export type user_reviewScalarWhereInput = {
    AND?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
    OR?: user_reviewScalarWhereInput[]
    NOT?: user_reviewScalarWhereInput | user_reviewScalarWhereInput[]
    id?: IntFilter<"user_review"> | number
    account_id?: IntFilter<"user_review"> | number
    properties_id?: IntFilter<"user_review"> | number
    transaction_id?: IntFilter<"user_review"> | number
    rating?: IntFilter<"user_review"> | number
    review?: StringFilter<"user_review"> | string
    created_at?: DateTimeFilter<"user_review"> | Date | string
  }

  export type booked_user_listUpsertWithWhereUniqueWithoutAccount_tableInput = {
    where: booked_user_listWhereUniqueInput
    update: XOR<booked_user_listUpdateWithoutAccount_tableInput, booked_user_listUncheckedUpdateWithoutAccount_tableInput>
    create: XOR<booked_user_listCreateWithoutAccount_tableInput, booked_user_listUncheckedCreateWithoutAccount_tableInput>
  }

  export type booked_user_listUpdateWithWhereUniqueWithoutAccount_tableInput = {
    where: booked_user_listWhereUniqueInput
    data: XOR<booked_user_listUpdateWithoutAccount_tableInput, booked_user_listUncheckedUpdateWithoutAccount_tableInput>
  }

  export type booked_user_listUpdateManyWithWhereWithoutAccount_tableInput = {
    where: booked_user_listScalarWhereInput
    data: XOR<booked_user_listUpdateManyMutationInput, booked_user_listUncheckedUpdateManyWithoutAccount_tableInput>
  }

  export type booked_user_listScalarWhereInput = {
    AND?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
    OR?: booked_user_listScalarWhereInput[]
    NOT?: booked_user_listScalarWhereInput | booked_user_listScalarWhereInput[]
    id?: IntFilter<"booked_user_list"> | number
    transaction_id?: IntFilter<"booked_user_list"> | number
    account_id?: IntFilter<"booked_user_list"> | number
    properties_id?: IntFilter<"booked_user_list"> | number
    total_price?: IntFilter<"booked_user_list"> | number
    booking_date_end?: DateTimeFilter<"booked_user_list"> | Date | string
  }

  export type account_tableCreateWithoutTransaction_tableInput = {
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    properties_table?: properties_tableCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    properties_table?: properties_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableCreateOrConnectWithoutTransaction_tableInput = {
    where: account_tableWhereUniqueInput
    create: XOR<account_tableCreateWithoutTransaction_tableInput, account_tableUncheckedCreateWithoutTransaction_tableInput>
  }

  export type properties_tableCreateWithoutTransaction_tableInput = {
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    account_table: account_tableCreateNestedOneWithoutProperties_tableInput
    user_review?: user_reviewCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    user_review?: user_reviewUncheckedCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableCreateOrConnectWithoutTransaction_tableInput = {
    where: properties_tableWhereUniqueInput
    create: XOR<properties_tableCreateWithoutTransaction_tableInput, properties_tableUncheckedCreateWithoutTransaction_tableInput>
  }

  export type user_reviewCreateWithoutTransaction_tableInput = {
    rating: number
    review: string
    created_at?: Date | string
    account_table: account_tableCreateNestedOneWithoutUser_reviewInput
    properties_table: properties_tableCreateNestedOneWithoutUser_reviewInput
  }

  export type user_reviewUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    account_id: number
    properties_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type user_reviewCreateOrConnectWithoutTransaction_tableInput = {
    where: user_reviewWhereUniqueInput
    create: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput>
  }

  export type user_reviewCreateManyTransaction_tableInputEnvelope = {
    data: user_reviewCreateManyTransaction_tableInput | user_reviewCreateManyTransaction_tableInput[]
    skipDuplicates?: boolean
  }

  export type booked_user_listCreateWithoutTransaction_tableInput = {
    total_price: number
    booking_date_end: Date | string
    account_table: account_tableCreateNestedOneWithoutBooked_user_listInput
    properties_table: properties_tableCreateNestedOneWithoutBooked_user_listInput
  }

  export type booked_user_listUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type booked_user_listCreateOrConnectWithoutTransaction_tableInput = {
    where: booked_user_listWhereUniqueInput
    create: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput>
  }

  export type booked_user_listCreateManyTransaction_tableInputEnvelope = {
    data: booked_user_listCreateManyTransaction_tableInput | booked_user_listCreateManyTransaction_tableInput[]
    skipDuplicates?: boolean
  }

  export type account_tableUpsertWithoutTransaction_tableInput = {
    update: XOR<account_tableUpdateWithoutTransaction_tableInput, account_tableUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<account_tableCreateWithoutTransaction_tableInput, account_tableUncheckedCreateWithoutTransaction_tableInput>
    where?: account_tableWhereInput
  }

  export type account_tableUpdateToOneWithWhereWithoutTransaction_tableInput = {
    where?: account_tableWhereInput
    data: XOR<account_tableUpdateWithoutTransaction_tableInput, account_tableUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type account_tableUpdateWithoutTransaction_tableInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_table?: properties_tableUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_table?: properties_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutAccount_tableNestedInput
  }

  export type properties_tableUpsertWithoutTransaction_tableInput = {
    update: XOR<properties_tableUpdateWithoutTransaction_tableInput, properties_tableUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<properties_tableCreateWithoutTransaction_tableInput, properties_tableUncheckedCreateWithoutTransaction_tableInput>
    where?: properties_tableWhereInput
  }

  export type properties_tableUpdateToOneWithWhereWithoutTransaction_tableInput = {
    where?: properties_tableWhereInput
    data: XOR<properties_tableUpdateWithoutTransaction_tableInput, properties_tableUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type properties_tableUpdateWithoutTransaction_tableInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutProperties_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_review?: user_reviewUncheckedUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutProperties_tableNestedInput
  }

  export type user_reviewUpsertWithWhereUniqueWithoutTransaction_tableInput = {
    where: user_reviewWhereUniqueInput
    update: XOR<user_reviewUpdateWithoutTransaction_tableInput, user_reviewUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<user_reviewCreateWithoutTransaction_tableInput, user_reviewUncheckedCreateWithoutTransaction_tableInput>
  }

  export type user_reviewUpdateWithWhereUniqueWithoutTransaction_tableInput = {
    where: user_reviewWhereUniqueInput
    data: XOR<user_reviewUpdateWithoutTransaction_tableInput, user_reviewUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type user_reviewUpdateManyWithWhereWithoutTransaction_tableInput = {
    where: user_reviewScalarWhereInput
    data: XOR<user_reviewUpdateManyMutationInput, user_reviewUncheckedUpdateManyWithoutTransaction_tableInput>
  }

  export type booked_user_listUpsertWithWhereUniqueWithoutTransaction_tableInput = {
    where: booked_user_listWhereUniqueInput
    update: XOR<booked_user_listUpdateWithoutTransaction_tableInput, booked_user_listUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<booked_user_listCreateWithoutTransaction_tableInput, booked_user_listUncheckedCreateWithoutTransaction_tableInput>
  }

  export type booked_user_listUpdateWithWhereUniqueWithoutTransaction_tableInput = {
    where: booked_user_listWhereUniqueInput
    data: XOR<booked_user_listUpdateWithoutTransaction_tableInput, booked_user_listUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type booked_user_listUpdateManyWithWhereWithoutTransaction_tableInput = {
    where: booked_user_listScalarWhereInput
    data: XOR<booked_user_listUpdateManyMutationInput, booked_user_listUncheckedUpdateManyWithoutTransaction_tableInput>
  }

  export type transaction_tableCreateWithoutProperties_tableInput = {
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    account_table: account_tableCreateNestedOneWithoutTransaction_tableInput
    user_review?: user_reviewCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutProperties_tableInput = {
    id?: number
    account_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    user_review?: user_reviewUncheckedCreateNestedManyWithoutTransaction_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableCreateOrConnectWithoutProperties_tableInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput>
  }

  export type transaction_tableCreateManyProperties_tableInputEnvelope = {
    data: transaction_tableCreateManyProperties_tableInput | transaction_tableCreateManyProperties_tableInput[]
    skipDuplicates?: boolean
  }

  export type account_tableCreateWithoutProperties_tableInput = {
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUncheckedCreateWithoutProperties_tableInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableCreateOrConnectWithoutProperties_tableInput = {
    where: account_tableWhereUniqueInput
    create: XOR<account_tableCreateWithoutProperties_tableInput, account_tableUncheckedCreateWithoutProperties_tableInput>
  }

  export type user_reviewCreateWithoutProperties_tableInput = {
    rating: number
    review: string
    created_at?: Date | string
    account_table: account_tableCreateNestedOneWithoutUser_reviewInput
    transaction_table: transaction_tableCreateNestedOneWithoutUser_reviewInput
  }

  export type user_reviewUncheckedCreateWithoutProperties_tableInput = {
    id?: number
    account_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type user_reviewCreateOrConnectWithoutProperties_tableInput = {
    where: user_reviewWhereUniqueInput
    create: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput>
  }

  export type user_reviewCreateManyProperties_tableInputEnvelope = {
    data: user_reviewCreateManyProperties_tableInput | user_reviewCreateManyProperties_tableInput[]
    skipDuplicates?: boolean
  }

  export type booked_user_listCreateWithoutProperties_tableInput = {
    total_price: number
    booking_date_end: Date | string
    account_table: account_tableCreateNestedOneWithoutBooked_user_listInput
    transaction_table: transaction_tableCreateNestedOneWithoutBooked_user_listInput
  }

  export type booked_user_listUncheckedCreateWithoutProperties_tableInput = {
    id?: number
    transaction_id: number
    account_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type booked_user_listCreateOrConnectWithoutProperties_tableInput = {
    where: booked_user_listWhereUniqueInput
    create: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput>
  }

  export type booked_user_listCreateManyProperties_tableInputEnvelope = {
    data: booked_user_listCreateManyProperties_tableInput | booked_user_listCreateManyProperties_tableInput[]
    skipDuplicates?: boolean
  }

  export type transaction_tableUpsertWithWhereUniqueWithoutProperties_tableInput = {
    where: transaction_tableWhereUniqueInput
    update: XOR<transaction_tableUpdateWithoutProperties_tableInput, transaction_tableUncheckedUpdateWithoutProperties_tableInput>
    create: XOR<transaction_tableCreateWithoutProperties_tableInput, transaction_tableUncheckedCreateWithoutProperties_tableInput>
  }

  export type transaction_tableUpdateWithWhereUniqueWithoutProperties_tableInput = {
    where: transaction_tableWhereUniqueInput
    data: XOR<transaction_tableUpdateWithoutProperties_tableInput, transaction_tableUncheckedUpdateWithoutProperties_tableInput>
  }

  export type transaction_tableUpdateManyWithWhereWithoutProperties_tableInput = {
    where: transaction_tableScalarWhereInput
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyWithoutProperties_tableInput>
  }

  export type account_tableUpsertWithoutProperties_tableInput = {
    update: XOR<account_tableUpdateWithoutProperties_tableInput, account_tableUncheckedUpdateWithoutProperties_tableInput>
    create: XOR<account_tableCreateWithoutProperties_tableInput, account_tableUncheckedCreateWithoutProperties_tableInput>
    where?: account_tableWhereInput
  }

  export type account_tableUpdateToOneWithWhereWithoutProperties_tableInput = {
    where?: account_tableWhereInput
    data: XOR<account_tableUpdateWithoutProperties_tableInput, account_tableUncheckedUpdateWithoutProperties_tableInput>
  }

  export type account_tableUpdateWithoutProperties_tableInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableUncheckedUpdateWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutAccount_tableNestedInput
  }

  export type user_reviewUpsertWithWhereUniqueWithoutProperties_tableInput = {
    where: user_reviewWhereUniqueInput
    update: XOR<user_reviewUpdateWithoutProperties_tableInput, user_reviewUncheckedUpdateWithoutProperties_tableInput>
    create: XOR<user_reviewCreateWithoutProperties_tableInput, user_reviewUncheckedCreateWithoutProperties_tableInput>
  }

  export type user_reviewUpdateWithWhereUniqueWithoutProperties_tableInput = {
    where: user_reviewWhereUniqueInput
    data: XOR<user_reviewUpdateWithoutProperties_tableInput, user_reviewUncheckedUpdateWithoutProperties_tableInput>
  }

  export type user_reviewUpdateManyWithWhereWithoutProperties_tableInput = {
    where: user_reviewScalarWhereInput
    data: XOR<user_reviewUpdateManyMutationInput, user_reviewUncheckedUpdateManyWithoutProperties_tableInput>
  }

  export type booked_user_listUpsertWithWhereUniqueWithoutProperties_tableInput = {
    where: booked_user_listWhereUniqueInput
    update: XOR<booked_user_listUpdateWithoutProperties_tableInput, booked_user_listUncheckedUpdateWithoutProperties_tableInput>
    create: XOR<booked_user_listCreateWithoutProperties_tableInput, booked_user_listUncheckedCreateWithoutProperties_tableInput>
  }

  export type booked_user_listUpdateWithWhereUniqueWithoutProperties_tableInput = {
    where: booked_user_listWhereUniqueInput
    data: XOR<booked_user_listUpdateWithoutProperties_tableInput, booked_user_listUncheckedUpdateWithoutProperties_tableInput>
  }

  export type booked_user_listUpdateManyWithWhereWithoutProperties_tableInput = {
    where: booked_user_listScalarWhereInput
    data: XOR<booked_user_listUpdateManyMutationInput, booked_user_listUncheckedUpdateManyWithoutProperties_tableInput>
  }

  export type account_tableCreateWithoutUser_reviewInput = {
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUncheckedCreateWithoutUser_reviewInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableCreateOrConnectWithoutUser_reviewInput = {
    where: account_tableWhereUniqueInput
    create: XOR<account_tableCreateWithoutUser_reviewInput, account_tableUncheckedCreateWithoutUser_reviewInput>
  }

  export type properties_tableCreateWithoutUser_reviewInput = {
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutProperties_tableInput
    account_table: account_tableCreateNestedOneWithoutProperties_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUncheckedCreateWithoutUser_reviewInput = {
    id?: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutProperties_tableInput
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableCreateOrConnectWithoutUser_reviewInput = {
    where: properties_tableWhereUniqueInput
    create: XOR<properties_tableCreateWithoutUser_reviewInput, properties_tableUncheckedCreateWithoutUser_reviewInput>
  }

  export type transaction_tableCreateWithoutUser_reviewInput = {
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    account_table: account_tableCreateNestedOneWithoutTransaction_tableInput
    properties_table: properties_tableCreateNestedOneWithoutTransaction_tableInput
    booked_user_list?: booked_user_listCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutUser_reviewInput = {
    id?: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    booked_user_list?: booked_user_listUncheckedCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableCreateOrConnectWithoutUser_reviewInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutUser_reviewInput, transaction_tableUncheckedCreateWithoutUser_reviewInput>
  }

  export type account_tableUpsertWithoutUser_reviewInput = {
    update: XOR<account_tableUpdateWithoutUser_reviewInput, account_tableUncheckedUpdateWithoutUser_reviewInput>
    create: XOR<account_tableCreateWithoutUser_reviewInput, account_tableUncheckedCreateWithoutUser_reviewInput>
    where?: account_tableWhereInput
  }

  export type account_tableUpdateToOneWithWhereWithoutUser_reviewInput = {
    where?: account_tableWhereInput
    data: XOR<account_tableUpdateWithoutUser_reviewInput, account_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type account_tableUpdateWithoutUser_reviewInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableUncheckedUpdateWithoutUser_reviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutAccount_tableNestedInput
  }

  export type properties_tableUpsertWithoutUser_reviewInput = {
    update: XOR<properties_tableUpdateWithoutUser_reviewInput, properties_tableUncheckedUpdateWithoutUser_reviewInput>
    create: XOR<properties_tableCreateWithoutUser_reviewInput, properties_tableUncheckedCreateWithoutUser_reviewInput>
    where?: properties_tableWhereInput
  }

  export type properties_tableUpdateToOneWithWhereWithoutUser_reviewInput = {
    where?: properties_tableWhereInput
    data: XOR<properties_tableUpdateWithoutUser_reviewInput, properties_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type properties_tableUpdateWithoutUser_reviewInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutProperties_tableNestedInput
    account_table?: account_tableUpdateOneRequiredWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateWithoutUser_reviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutProperties_tableNestedInput
  }

  export type transaction_tableUpsertWithoutUser_reviewInput = {
    update: XOR<transaction_tableUpdateWithoutUser_reviewInput, transaction_tableUncheckedUpdateWithoutUser_reviewInput>
    create: XOR<transaction_tableCreateWithoutUser_reviewInput, transaction_tableUncheckedCreateWithoutUser_reviewInput>
    where?: transaction_tableWhereInput
  }

  export type transaction_tableUpdateToOneWithWhereWithoutUser_reviewInput = {
    where?: transaction_tableWhereInput
    data: XOR<transaction_tableUpdateWithoutUser_reviewInput, transaction_tableUncheckedUpdateWithoutUser_reviewInput>
  }

  export type transaction_tableUpdateWithoutUser_reviewInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    account_table?: account_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutUser_reviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutTransaction_tableNestedInput
  }

  export type account_tableCreateWithoutBooked_user_listInput = {
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableUncheckedCreateWithoutBooked_user_listInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role: $Enums.account_role
    password: string
    image: string
    created_at?: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    properties_table?: properties_tableUncheckedCreateNestedManyWithoutAccount_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutAccount_tableInput
  }

  export type account_tableCreateOrConnectWithoutBooked_user_listInput = {
    where: account_tableWhereUniqueInput
    create: XOR<account_tableCreateWithoutBooked_user_listInput, account_tableUncheckedCreateWithoutBooked_user_listInput>
  }

  export type properties_tableCreateWithoutBooked_user_listInput = {
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableCreateNestedManyWithoutProperties_tableInput
    account_table: account_tableCreateNestedOneWithoutProperties_tableInput
    user_review?: user_reviewCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableUncheckedCreateWithoutBooked_user_listInput = {
    id?: number
    account_id: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutProperties_tableInput
    user_review?: user_reviewUncheckedCreateNestedManyWithoutProperties_tableInput
  }

  export type properties_tableCreateOrConnectWithoutBooked_user_listInput = {
    where: properties_tableWhereUniqueInput
    create: XOR<properties_tableCreateWithoutBooked_user_listInput, properties_tableUncheckedCreateWithoutBooked_user_listInput>
  }

  export type transaction_tableCreateWithoutBooked_user_listInput = {
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    account_table: account_tableCreateNestedOneWithoutTransaction_tableInput
    properties_table: properties_tableCreateNestedOneWithoutTransaction_tableInput
    user_review?: user_reviewCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutBooked_user_listInput = {
    id?: number
    account_id: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
    user_review?: user_reviewUncheckedCreateNestedManyWithoutTransaction_tableInput
  }

  export type transaction_tableCreateOrConnectWithoutBooked_user_listInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutBooked_user_listInput, transaction_tableUncheckedCreateWithoutBooked_user_listInput>
  }

  export type account_tableUpsertWithoutBooked_user_listInput = {
    update: XOR<account_tableUpdateWithoutBooked_user_listInput, account_tableUncheckedUpdateWithoutBooked_user_listInput>
    create: XOR<account_tableCreateWithoutBooked_user_listInput, account_tableUncheckedCreateWithoutBooked_user_listInput>
    where?: account_tableWhereInput
  }

  export type account_tableUpdateToOneWithWhereWithoutBooked_user_listInput = {
    where?: account_tableWhereInput
    data: XOR<account_tableUpdateWithoutBooked_user_listInput, account_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type account_tableUpdateWithoutBooked_user_listInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutAccount_tableNestedInput
  }

  export type account_tableUncheckedUpdateWithoutBooked_user_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumaccount_roleFieldUpdateOperationsInput | $Enums.account_role
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    properties_table?: properties_tableUncheckedUpdateManyWithoutAccount_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutAccount_tableNestedInput
  }

  export type properties_tableUpsertWithoutBooked_user_listInput = {
    update: XOR<properties_tableUpdateWithoutBooked_user_listInput, properties_tableUncheckedUpdateWithoutBooked_user_listInput>
    create: XOR<properties_tableCreateWithoutBooked_user_listInput, properties_tableUncheckedCreateWithoutBooked_user_listInput>
    where?: properties_tableWhereInput
  }

  export type properties_tableUpdateToOneWithWhereWithoutBooked_user_listInput = {
    where?: properties_tableWhereInput
    data: XOR<properties_tableUpdateWithoutBooked_user_listInput, properties_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type properties_tableUpdateWithoutBooked_user_listInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutProperties_tableNestedInput
    account_table?: account_tableUpdateOneRequiredWithoutProperties_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateWithoutBooked_user_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutProperties_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutProperties_tableNestedInput
  }

  export type transaction_tableUpsertWithoutBooked_user_listInput = {
    update: XOR<transaction_tableUpdateWithoutBooked_user_listInput, transaction_tableUncheckedUpdateWithoutBooked_user_listInput>
    create: XOR<transaction_tableCreateWithoutBooked_user_listInput, transaction_tableUncheckedCreateWithoutBooked_user_listInput>
    where?: transaction_tableWhereInput
  }

  export type transaction_tableUpdateToOneWithWhereWithoutBooked_user_listInput = {
    where?: transaction_tableWhereInput
    data: XOR<transaction_tableUpdateWithoutBooked_user_listInput, transaction_tableUncheckedUpdateWithoutBooked_user_listInput>
  }

  export type transaction_tableUpdateWithoutBooked_user_listInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    account_table?: account_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutBooked_user_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    user_review?: user_reviewUncheckedUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableCreateManyAccount_tableInput = {
    id?: number
    properties_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
  }

  export type properties_tableCreateManyAccount_tableInput = {
    id?: number
    room_id: number
    name: string
    category: string
    address: string
    description: string
    city: string
    images: string
    created_at?: Date | string
    updated_at: Date | string
  }

  export type user_reviewCreateManyAccount_tableInput = {
    id?: number
    properties_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type booked_user_listCreateManyAccount_tableInput = {
    id?: number
    transaction_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type transaction_tableUpdateWithoutAccount_tableInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    properties_table?: properties_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    user_review?: user_reviewUncheckedUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateManyWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
  }

  export type properties_tableUpdateWithoutAccount_tableInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUpdateManyWithoutProperties_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutProperties_tableNestedInput
    user_review?: user_reviewUncheckedUpdateManyWithoutProperties_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutProperties_tableNestedInput
  }

  export type properties_tableUncheckedUpdateManyWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewUpdateWithoutAccount_tableInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_table?: properties_tableUpdateOneRequiredWithoutUser_reviewNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutUser_reviewNestedInput
  }

  export type user_reviewUncheckedUpdateWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewUncheckedUpdateManyWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUpdateWithoutAccount_tableInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    properties_table?: properties_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
  }

  export type booked_user_listUncheckedUpdateWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUncheckedUpdateManyWithoutAccount_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewCreateManyTransaction_tableInput = {
    id?: number
    account_id: number
    properties_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type booked_user_listCreateManyTransaction_tableInput = {
    id?: number
    account_id: number
    properties_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type user_reviewUpdateWithoutTransaction_tableInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutUser_reviewNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutUser_reviewNestedInput
  }

  export type user_reviewUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewUncheckedUpdateManyWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUpdateWithoutTransaction_tableInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
    properties_table?: properties_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
  }

  export type booked_user_listUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUncheckedUpdateManyWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    properties_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_tableCreateManyProperties_tableInput = {
    id?: number
    account_id: number
    price: number
    booking_date_start: Date | string
    booking_date_end: Date | string
    payment_proof_url: string
    created_at?: Date | string
    expires_at: Date | string
    quantity: number
    transaction_status: $Enums.trx_status
  }

  export type user_reviewCreateManyProperties_tableInput = {
    id?: number
    account_id: number
    transaction_id: number
    rating: number
    review: string
    created_at?: Date | string
  }

  export type booked_user_listCreateManyProperties_tableInput = {
    id?: number
    transaction_id: number
    account_id: number
    total_price: number
    booking_date_end: Date | string
  }

  export type transaction_tableUpdateWithoutProperties_tableInput = {
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    account_table?: account_tableUpdateOneRequiredWithoutTransaction_tableNestedInput
    user_review?: user_reviewUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
    user_review?: user_reviewUncheckedUpdateManyWithoutTransaction_tableNestedInput
    booked_user_list?: booked_user_listUncheckedUpdateManyWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateManyWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking_date_start?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_proof_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    transaction_status?: Enumtrx_statusFieldUpdateOperationsInput | $Enums.trx_status
  }

  export type user_reviewUpdateWithoutProperties_tableInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutUser_reviewNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutUser_reviewNestedInput
  }

  export type user_reviewUncheckedUpdateWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_reviewUncheckedUpdateManyWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUpdateWithoutProperties_tableInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
    account_table?: account_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
    transaction_table?: transaction_tableUpdateOneRequiredWithoutBooked_user_listNestedInput
  }

  export type booked_user_listUncheckedUpdateWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booked_user_listUncheckedUpdateManyWithoutProperties_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    booking_date_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}