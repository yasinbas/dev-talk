
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lobby
 * 
 */
export type Lobby = $Result.DefaultSelection<Prisma.$LobbyPayload>
/**
 * Model LobbyParticipant
 * 
 */
export type LobbyParticipant = $Result.DefaultSelection<Prisma.$LobbyParticipantPayload>
/**
 * Model Meme
 * 
 */
export type Meme = $Result.DefaultSelection<Prisma.$MemePayload>
/**
 * Model Podcast
 * 
 */
export type Podcast = $Result.DefaultSelection<Prisma.$PodcastPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model ArticleRead
 * 
 */
export type ArticleRead = $Result.DefaultSelection<Prisma.$ArticleReadPayload>
/**
 * Model ArticleLike
 * 
 */
export type ArticleLike = $Result.DefaultSelection<Prisma.$ArticleLikePayload>
/**
 * Model PointAction
 * 
 */
export type PointAction = $Result.DefaultSelection<Prisma.$PointActionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DEVELOPER: 'DEVELOPER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LobbyStatus: {
  WAITING: 'WAITING',
  LIVE: 'LIVE',
  ENDED: 'ENDED'
};

export type LobbyStatus = (typeof LobbyStatus)[keyof typeof LobbyStatus]


export const ParticipantRole: {
  HOST: 'HOST',
  SPEAKER: 'SPEAKER',
  LISTENER: 'LISTENER'
};

export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole]


export const PointActionType: {
  ARTICLE_READ: 'ARTICLE_READ',
  ARTICLE_PUBLISHED: 'ARTICLE_PUBLISHED',
  PODCAST_PUBLISHED: 'PODCAST_PUBLISHED',
  MEME_PUBLISHED: 'MEME_PUBLISHED',
  LOBBY_HOSTED: 'LOBBY_HOSTED',
  DECAY: 'DECAY'
};

export type PointActionType = (typeof PointActionType)[keyof typeof PointActionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LobbyStatus = $Enums.LobbyStatus

export const LobbyStatus: typeof $Enums.LobbyStatus

export type ParticipantRole = $Enums.ParticipantRole

export const ParticipantRole: typeof $Enums.ParticipantRole

export type PointActionType = $Enums.PointActionType

export const PointActionType: typeof $Enums.PointActionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lobby`: Exposes CRUD operations for the **Lobby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lobbies
    * const lobbies = await prisma.lobby.findMany()
    * ```
    */
  get lobby(): Prisma.LobbyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lobbyParticipant`: Exposes CRUD operations for the **LobbyParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LobbyParticipants
    * const lobbyParticipants = await prisma.lobbyParticipant.findMany()
    * ```
    */
  get lobbyParticipant(): Prisma.LobbyParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meme`: Exposes CRUD operations for the **Meme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memes
    * const memes = await prisma.meme.findMany()
    * ```
    */
  get meme(): Prisma.MemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.podcast`: Exposes CRUD operations for the **Podcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Podcasts
    * const podcasts = await prisma.podcast.findMany()
    * ```
    */
  get podcast(): Prisma.PodcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleRead`: Exposes CRUD operations for the **ArticleRead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleReads
    * const articleReads = await prisma.articleRead.findMany()
    * ```
    */
  get articleRead(): Prisma.ArticleReadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleLike`: Exposes CRUD operations for the **ArticleLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleLikes
    * const articleLikes = await prisma.articleLike.findMany()
    * ```
    */
  get articleLike(): Prisma.ArticleLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointAction`: Exposes CRUD operations for the **PointAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointActions
    * const pointActions = await prisma.pointAction.findMany()
    * ```
    */
  get pointAction(): Prisma.PointActionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Lobby: 'Lobby',
    LobbyParticipant: 'LobbyParticipant',
    Meme: 'Meme',
    Podcast: 'Podcast',
    Event: 'Event',
    Article: 'Article',
    ArticleRead: 'ArticleRead',
    ArticleLike: 'ArticleLike',
    PointAction: 'PointAction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "lobby" | "lobbyParticipant" | "meme" | "podcast" | "event" | "article" | "articleRead" | "articleLike" | "pointAction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lobby: {
        payload: Prisma.$LobbyPayload<ExtArgs>
        fields: Prisma.LobbyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LobbyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LobbyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          findFirst: {
            args: Prisma.LobbyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LobbyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          findMany: {
            args: Prisma.LobbyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          create: {
            args: Prisma.LobbyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          createMany: {
            args: Prisma.LobbyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LobbyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          delete: {
            args: Prisma.LobbyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          update: {
            args: Prisma.LobbyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          deleteMany: {
            args: Prisma.LobbyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LobbyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LobbyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>[]
          }
          upsert: {
            args: Prisma.LobbyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyPayload>
          }
          aggregate: {
            args: Prisma.LobbyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLobby>
          }
          groupBy: {
            args: Prisma.LobbyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LobbyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LobbyCountArgs<ExtArgs>
            result: $Utils.Optional<LobbyCountAggregateOutputType> | number
          }
        }
      }
      LobbyParticipant: {
        payload: Prisma.$LobbyParticipantPayload<ExtArgs>
        fields: Prisma.LobbyParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LobbyParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LobbyParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          findFirst: {
            args: Prisma.LobbyParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LobbyParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          findMany: {
            args: Prisma.LobbyParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>[]
          }
          create: {
            args: Prisma.LobbyParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          createMany: {
            args: Prisma.LobbyParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LobbyParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>[]
          }
          delete: {
            args: Prisma.LobbyParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          update: {
            args: Prisma.LobbyParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          deleteMany: {
            args: Prisma.LobbyParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LobbyParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LobbyParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>[]
          }
          upsert: {
            args: Prisma.LobbyParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LobbyParticipantPayload>
          }
          aggregate: {
            args: Prisma.LobbyParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLobbyParticipant>
          }
          groupBy: {
            args: Prisma.LobbyParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<LobbyParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.LobbyParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<LobbyParticipantCountAggregateOutputType> | number
          }
        }
      }
      Meme: {
        payload: Prisma.$MemePayload<ExtArgs>
        fields: Prisma.MemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          findFirst: {
            args: Prisma.MemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          findMany: {
            args: Prisma.MemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>[]
          }
          create: {
            args: Prisma.MemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          createMany: {
            args: Prisma.MemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>[]
          }
          delete: {
            args: Prisma.MemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          update: {
            args: Prisma.MemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          deleteMany: {
            args: Prisma.MemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>[]
          }
          upsert: {
            args: Prisma.MemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemePayload>
          }
          aggregate: {
            args: Prisma.MemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeme>
          }
          groupBy: {
            args: Prisma.MemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemeCountArgs<ExtArgs>
            result: $Utils.Optional<MemeCountAggregateOutputType> | number
          }
        }
      }
      Podcast: {
        payload: Prisma.$PodcastPayload<ExtArgs>
        fields: Prisma.PodcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PodcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PodcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          findFirst: {
            args: Prisma.PodcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PodcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          findMany: {
            args: Prisma.PodcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          create: {
            args: Prisma.PodcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          createMany: {
            args: Prisma.PodcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PodcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          delete: {
            args: Prisma.PodcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          update: {
            args: Prisma.PodcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          deleteMany: {
            args: Prisma.PodcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PodcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PodcastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          upsert: {
            args: Prisma.PodcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          aggregate: {
            args: Prisma.PodcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePodcast>
          }
          groupBy: {
            args: Prisma.PodcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<PodcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.PodcastCountArgs<ExtArgs>
            result: $Utils.Optional<PodcastCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      ArticleRead: {
        payload: Prisma.$ArticleReadPayload<ExtArgs>
        fields: Prisma.ArticleReadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleReadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleReadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          findFirst: {
            args: Prisma.ArticleReadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleReadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          findMany: {
            args: Prisma.ArticleReadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>[]
          }
          create: {
            args: Prisma.ArticleReadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          createMany: {
            args: Prisma.ArticleReadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleReadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>[]
          }
          delete: {
            args: Prisma.ArticleReadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          update: {
            args: Prisma.ArticleReadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          deleteMany: {
            args: Prisma.ArticleReadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleReadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleReadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>[]
          }
          upsert: {
            args: Prisma.ArticleReadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleReadPayload>
          }
          aggregate: {
            args: Prisma.ArticleReadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleRead>
          }
          groupBy: {
            args: Prisma.ArticleReadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleReadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleReadCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleReadCountAggregateOutputType> | number
          }
        }
      }
      ArticleLike: {
        payload: Prisma.$ArticleLikePayload<ExtArgs>
        fields: Prisma.ArticleLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          findFirst: {
            args: Prisma.ArticleLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          findMany: {
            args: Prisma.ArticleLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>[]
          }
          create: {
            args: Prisma.ArticleLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          createMany: {
            args: Prisma.ArticleLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>[]
          }
          delete: {
            args: Prisma.ArticleLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          update: {
            args: Prisma.ArticleLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          deleteMany: {
            args: Prisma.ArticleLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>[]
          }
          upsert: {
            args: Prisma.ArticleLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleLikePayload>
          }
          aggregate: {
            args: Prisma.ArticleLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleLike>
          }
          groupBy: {
            args: Prisma.ArticleLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleLikeCountAggregateOutputType> | number
          }
        }
      }
      PointAction: {
        payload: Prisma.$PointActionPayload<ExtArgs>
        fields: Prisma.PointActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          findFirst: {
            args: Prisma.PointActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          findMany: {
            args: Prisma.PointActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>[]
          }
          create: {
            args: Prisma.PointActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          createMany: {
            args: Prisma.PointActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>[]
          }
          delete: {
            args: Prisma.PointActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          update: {
            args: Prisma.PointActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          deleteMany: {
            args: Prisma.PointActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>[]
          }
          upsert: {
            args: Prisma.PointActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointActionPayload>
          }
          aggregate: {
            args: Prisma.PointActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointAction>
          }
          groupBy: {
            args: Prisma.PointActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointActionCountArgs<ExtArgs>
            result: $Utils.Optional<PointActionCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    lobby?: LobbyOmit
    lobbyParticipant?: LobbyParticipantOmit
    meme?: MemeOmit
    podcast?: PodcastOmit
    event?: EventOmit
    article?: ArticleOmit
    articleRead?: ArticleReadOmit
    articleLike?: ArticleLikeOmit
    pointAction?: PointActionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lobbiesHosted: number
    lobbyParticipation: number
    podcasts: number
    memes: number
    eventsOrganized: number
    articles: number
    articleReads: number
    likes: number
    pointActions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobbiesHosted?: boolean | UserCountOutputTypeCountLobbiesHostedArgs
    lobbyParticipation?: boolean | UserCountOutputTypeCountLobbyParticipationArgs
    podcasts?: boolean | UserCountOutputTypeCountPodcastsArgs
    memes?: boolean | UserCountOutputTypeCountMemesArgs
    eventsOrganized?: boolean | UserCountOutputTypeCountEventsOrganizedArgs
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    articleReads?: boolean | UserCountOutputTypeCountArticleReadsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    pointActions?: boolean | UserCountOutputTypeCountPointActionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLobbiesHostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLobbyParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPodcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticleReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleReadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointActionWhereInput
  }


  /**
   * Count Type LobbyCountOutputType
   */

  export type LobbyCountOutputType = {
    participants: number
  }

  export type LobbyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | LobbyCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * LobbyCountOutputType without action
   */
  export type LobbyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyCountOutputType
     */
    select?: LobbyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LobbyCountOutputType without action
   */
  export type LobbyCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    readers: number
    likes: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readers?: boolean | ArticleCountOutputTypeCountReadersArgs
    likes?: boolean | ArticleCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountReadersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleReadWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    bio: string | null
    role: $Enums.Role | null
    points: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    bio: string | null
    role: $Enums.Role | null
    points: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstName: number
    lastName: number
    imageUrl: number
    bio: number
    role: number
    techStack: number
    points: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    bio?: true
    role?: true
    points?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    bio?: true
    role?: true
    points?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    bio?: true
    role?: true
    techStack?: true
    points?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    bio: string | null
    role: $Enums.Role
    techStack: JsonValue | null
    points: number
    lastLoginAt: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    bio?: boolean
    role?: boolean
    techStack?: boolean
    points?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lobbiesHosted?: boolean | User$lobbiesHostedArgs<ExtArgs>
    lobbyParticipation?: boolean | User$lobbyParticipationArgs<ExtArgs>
    podcasts?: boolean | User$podcastsArgs<ExtArgs>
    memes?: boolean | User$memesArgs<ExtArgs>
    eventsOrganized?: boolean | User$eventsOrganizedArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    articleReads?: boolean | User$articleReadsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    pointActions?: boolean | User$pointActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    bio?: boolean
    role?: boolean
    techStack?: boolean
    points?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    bio?: boolean
    role?: boolean
    techStack?: boolean
    points?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    bio?: boolean
    role?: boolean
    techStack?: boolean
    points?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstName" | "lastName" | "imageUrl" | "bio" | "role" | "techStack" | "points" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobbiesHosted?: boolean | User$lobbiesHostedArgs<ExtArgs>
    lobbyParticipation?: boolean | User$lobbyParticipationArgs<ExtArgs>
    podcasts?: boolean | User$podcastsArgs<ExtArgs>
    memes?: boolean | User$memesArgs<ExtArgs>
    eventsOrganized?: boolean | User$eventsOrganizedArgs<ExtArgs>
    articles?: boolean | User$articlesArgs<ExtArgs>
    articleReads?: boolean | User$articleReadsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    pointActions?: boolean | User$pointActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lobbiesHosted: Prisma.$LobbyPayload<ExtArgs>[]
      lobbyParticipation: Prisma.$LobbyParticipantPayload<ExtArgs>[]
      podcasts: Prisma.$PodcastPayload<ExtArgs>[]
      memes: Prisma.$MemePayload<ExtArgs>[]
      eventsOrganized: Prisma.$EventPayload<ExtArgs>[]
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      articleReads: Prisma.$ArticleReadPayload<ExtArgs>[]
      likes: Prisma.$ArticleLikePayload<ExtArgs>[]
      pointActions: Prisma.$PointActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstName: string | null
      lastName: string | null
      imageUrl: string | null
      bio: string | null
      role: $Enums.Role
      techStack: Prisma.JsonValue | null
      points: number
      lastLoginAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lobbiesHosted<T extends User$lobbiesHostedArgs<ExtArgs> = {}>(args?: Subset<T, User$lobbiesHostedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lobbyParticipation<T extends User$lobbyParticipationArgs<ExtArgs> = {}>(args?: Subset<T, User$lobbyParticipationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    podcasts<T extends User$podcastsArgs<ExtArgs> = {}>(args?: Subset<T, User$podcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memes<T extends User$memesArgs<ExtArgs> = {}>(args?: Subset<T, User$memesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventsOrganized<T extends User$eventsOrganizedArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsOrganizedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articleReads<T extends User$articleReadsArgs<ExtArgs> = {}>(args?: Subset<T, User$articleReadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointActions<T extends User$pointActionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly techStack: FieldRef<"User", 'Json'>
    readonly points: FieldRef<"User", 'Int'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lobbiesHosted
   */
  export type User$lobbiesHostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    where?: LobbyWhereInput
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    cursor?: LobbyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * User.lobbyParticipation
   */
  export type User$lobbyParticipationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    cursor?: LobbyParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * User.podcasts
   */
  export type User$podcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    where?: PodcastWhereInput
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * User.memes
   */
  export type User$memesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    where?: MemeWhereInput
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    cursor?: MemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * User.eventsOrganized
   */
  export type User$eventsOrganizedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.articleReads
   */
  export type User$articleReadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    where?: ArticleReadWhereInput
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    cursor?: ArticleReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleReadScalarFieldEnum | ArticleReadScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    cursor?: ArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * User.pointActions
   */
  export type User$pointActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    where?: PointActionWhereInput
    orderBy?: PointActionOrderByWithRelationInput | PointActionOrderByWithRelationInput[]
    cursor?: PointActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointActionScalarFieldEnum | PointActionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lobby
   */

  export type AggregateLobby = {
    _count: LobbyCountAggregateOutputType | null
    _avg: LobbyAvgAggregateOutputType | null
    _sum: LobbySumAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  export type LobbyAvgAggregateOutputType = {
    maxParticipants: number | null
  }

  export type LobbySumAggregateOutputType = {
    maxParticipants: number | null
  }

  export type LobbyMinAggregateOutputType = {
    id: string | null
    title: string | null
    topic: string | null
    status: $Enums.LobbyStatus | null
    ownerId: string | null
    maxParticipants: number | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LobbyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    topic: string | null
    status: $Enums.LobbyStatus | null
    ownerId: string | null
    maxParticipants: number | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LobbyCountAggregateOutputType = {
    id: number
    title: number
    topic: number
    status: number
    ownerId: number
    maxParticipants: number
    startedAt: number
    endedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LobbyAvgAggregateInputType = {
    maxParticipants?: true
  }

  export type LobbySumAggregateInputType = {
    maxParticipants?: true
  }

  export type LobbyMinAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    status?: true
    ownerId?: true
    maxParticipants?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LobbyMaxAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    status?: true
    ownerId?: true
    maxParticipants?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LobbyCountAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    status?: true
    ownerId?: true
    maxParticipants?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LobbyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lobby to aggregate.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lobbies
    **/
    _count?: true | LobbyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LobbyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LobbySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyMaxAggregateInputType
  }

  export type GetLobbyAggregateType<T extends LobbyAggregateArgs> = {
        [P in keyof T & keyof AggregateLobby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobby[P]>
      : GetScalarType<T[P], AggregateLobby[P]>
  }




  export type LobbyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyWhereInput
    orderBy?: LobbyOrderByWithAggregationInput | LobbyOrderByWithAggregationInput[]
    by: LobbyScalarFieldEnum[] | LobbyScalarFieldEnum
    having?: LobbyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyCountAggregateInputType | true
    _avg?: LobbyAvgAggregateInputType
    _sum?: LobbySumAggregateInputType
    _min?: LobbyMinAggregateInputType
    _max?: LobbyMaxAggregateInputType
  }

  export type LobbyGroupByOutputType = {
    id: string
    title: string
    topic: string
    status: $Enums.LobbyStatus
    ownerId: string
    maxParticipants: number
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LobbyCountAggregateOutputType | null
    _avg: LobbyAvgAggregateOutputType | null
    _sum: LobbySumAggregateOutputType | null
    _min: LobbyMinAggregateOutputType | null
    _max: LobbyMaxAggregateOutputType | null
  }

  type GetLobbyGroupByPayload<T extends LobbyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LobbyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyGroupByOutputType[P]>
        }
      >
    >


  export type LobbySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    status?: boolean
    ownerId?: boolean
    maxParticipants?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Lobby$participantsArgs<ExtArgs>
    _count?: boolean | LobbyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    status?: boolean
    ownerId?: boolean
    maxParticipants?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    status?: boolean
    ownerId?: boolean
    maxParticipants?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobby"]>

  export type LobbySelectScalar = {
    id?: boolean
    title?: boolean
    topic?: boolean
    status?: boolean
    ownerId?: boolean
    maxParticipants?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LobbyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "topic" | "status" | "ownerId" | "maxParticipants" | "startedAt" | "endedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lobby"]>
  export type LobbyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Lobby$participantsArgs<ExtArgs>
    _count?: boolean | LobbyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LobbyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LobbyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LobbyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lobby"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$LobbyParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      topic: string
      status: $Enums.LobbyStatus
      ownerId: string
      maxParticipants: number
      startedAt: Date | null
      endedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lobby"]>
    composites: {}
  }

  type LobbyGetPayload<S extends boolean | null | undefined | LobbyDefaultArgs> = $Result.GetResult<Prisma.$LobbyPayload, S>

  type LobbyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LobbyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LobbyCountAggregateInputType | true
    }

  export interface LobbyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lobby'], meta: { name: 'Lobby' } }
    /**
     * Find zero or one Lobby that matches the filter.
     * @param {LobbyFindUniqueArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LobbyFindUniqueArgs>(args: SelectSubset<T, LobbyFindUniqueArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lobby that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LobbyFindUniqueOrThrowArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LobbyFindUniqueOrThrowArgs>(args: SelectSubset<T, LobbyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lobby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindFirstArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LobbyFindFirstArgs>(args?: SelectSubset<T, LobbyFindFirstArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lobby that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindFirstOrThrowArgs} args - Arguments to find a Lobby
     * @example
     * // Get one Lobby
     * const lobby = await prisma.lobby.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LobbyFindFirstOrThrowArgs>(args?: SelectSubset<T, LobbyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lobbies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lobbies
     * const lobbies = await prisma.lobby.findMany()
     * 
     * // Get first 10 Lobbies
     * const lobbies = await prisma.lobby.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lobbyWithIdOnly = await prisma.lobby.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LobbyFindManyArgs>(args?: SelectSubset<T, LobbyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lobby.
     * @param {LobbyCreateArgs} args - Arguments to create a Lobby.
     * @example
     * // Create one Lobby
     * const Lobby = await prisma.lobby.create({
     *   data: {
     *     // ... data to create a Lobby
     *   }
     * })
     * 
     */
    create<T extends LobbyCreateArgs>(args: SelectSubset<T, LobbyCreateArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lobbies.
     * @param {LobbyCreateManyArgs} args - Arguments to create many Lobbies.
     * @example
     * // Create many Lobbies
     * const lobby = await prisma.lobby.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LobbyCreateManyArgs>(args?: SelectSubset<T, LobbyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lobbies and returns the data saved in the database.
     * @param {LobbyCreateManyAndReturnArgs} args - Arguments to create many Lobbies.
     * @example
     * // Create many Lobbies
     * const lobby = await prisma.lobby.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lobbies and only return the `id`
     * const lobbyWithIdOnly = await prisma.lobby.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LobbyCreateManyAndReturnArgs>(args?: SelectSubset<T, LobbyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lobby.
     * @param {LobbyDeleteArgs} args - Arguments to delete one Lobby.
     * @example
     * // Delete one Lobby
     * const Lobby = await prisma.lobby.delete({
     *   where: {
     *     // ... filter to delete one Lobby
     *   }
     * })
     * 
     */
    delete<T extends LobbyDeleteArgs>(args: SelectSubset<T, LobbyDeleteArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lobby.
     * @param {LobbyUpdateArgs} args - Arguments to update one Lobby.
     * @example
     * // Update one Lobby
     * const lobby = await prisma.lobby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LobbyUpdateArgs>(args: SelectSubset<T, LobbyUpdateArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lobbies.
     * @param {LobbyDeleteManyArgs} args - Arguments to filter Lobbies to delete.
     * @example
     * // Delete a few Lobbies
     * const { count } = await prisma.lobby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LobbyDeleteManyArgs>(args?: SelectSubset<T, LobbyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lobbies
     * const lobby = await prisma.lobby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LobbyUpdateManyArgs>(args: SelectSubset<T, LobbyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lobbies and returns the data updated in the database.
     * @param {LobbyUpdateManyAndReturnArgs} args - Arguments to update many Lobbies.
     * @example
     * // Update many Lobbies
     * const lobby = await prisma.lobby.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lobbies and only return the `id`
     * const lobbyWithIdOnly = await prisma.lobby.updateManyAndReturn({
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
    updateManyAndReturn<T extends LobbyUpdateManyAndReturnArgs>(args: SelectSubset<T, LobbyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lobby.
     * @param {LobbyUpsertArgs} args - Arguments to update or create a Lobby.
     * @example
     * // Update or create a Lobby
     * const lobby = await prisma.lobby.upsert({
     *   create: {
     *     // ... data to create a Lobby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lobby we want to update
     *   }
     * })
     */
    upsert<T extends LobbyUpsertArgs>(args: SelectSubset<T, LobbyUpsertArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lobbies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyCountArgs} args - Arguments to filter Lobbies to count.
     * @example
     * // Count the number of Lobbies
     * const count = await prisma.lobby.count({
     *   where: {
     *     // ... the filter for the Lobbies we want to count
     *   }
     * })
    **/
    count<T extends LobbyCountArgs>(
      args?: Subset<T, LobbyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LobbyAggregateArgs>(args: Subset<T, LobbyAggregateArgs>): Prisma.PrismaPromise<GetLobbyAggregateType<T>>

    /**
     * Group by Lobby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyGroupByArgs} args - Group by arguments.
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
      T extends LobbyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyGroupByArgs['orderBy'] }
        : { orderBy?: LobbyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LobbyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lobby model
   */
  readonly fields: LobbyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lobby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LobbyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Lobby$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Lobby$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lobby model
   */
  interface LobbyFieldRefs {
    readonly id: FieldRef<"Lobby", 'String'>
    readonly title: FieldRef<"Lobby", 'String'>
    readonly topic: FieldRef<"Lobby", 'String'>
    readonly status: FieldRef<"Lobby", 'LobbyStatus'>
    readonly ownerId: FieldRef<"Lobby", 'String'>
    readonly maxParticipants: FieldRef<"Lobby", 'Int'>
    readonly startedAt: FieldRef<"Lobby", 'DateTime'>
    readonly endedAt: FieldRef<"Lobby", 'DateTime'>
    readonly createdAt: FieldRef<"Lobby", 'DateTime'>
    readonly updatedAt: FieldRef<"Lobby", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lobby findUnique
   */
  export type LobbyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby findUniqueOrThrow
   */
  export type LobbyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby findFirst
   */
  export type LobbyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lobbies.
     */
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby findFirstOrThrow
   */
  export type LobbyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobby to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lobbies.
     */
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby findMany
   */
  export type LobbyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter, which Lobbies to fetch.
     */
    where?: LobbyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lobbies to fetch.
     */
    orderBy?: LobbyOrderByWithRelationInput | LobbyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lobbies.
     */
    cursor?: LobbyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lobbies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lobbies.
     */
    skip?: number
    distinct?: LobbyScalarFieldEnum | LobbyScalarFieldEnum[]
  }

  /**
   * Lobby create
   */
  export type LobbyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The data needed to create a Lobby.
     */
    data: XOR<LobbyCreateInput, LobbyUncheckedCreateInput>
  }

  /**
   * Lobby createMany
   */
  export type LobbyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lobbies.
     */
    data: LobbyCreateManyInput | LobbyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lobby createManyAndReturn
   */
  export type LobbyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * The data used to create many Lobbies.
     */
    data: LobbyCreateManyInput | LobbyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lobby update
   */
  export type LobbyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The data needed to update a Lobby.
     */
    data: XOR<LobbyUpdateInput, LobbyUncheckedUpdateInput>
    /**
     * Choose, which Lobby to update.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby updateMany
   */
  export type LobbyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lobbies.
     */
    data: XOR<LobbyUpdateManyMutationInput, LobbyUncheckedUpdateManyInput>
    /**
     * Filter which Lobbies to update
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to update.
     */
    limit?: number
  }

  /**
   * Lobby updateManyAndReturn
   */
  export type LobbyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * The data used to update Lobbies.
     */
    data: XOR<LobbyUpdateManyMutationInput, LobbyUncheckedUpdateManyInput>
    /**
     * Filter which Lobbies to update
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lobby upsert
   */
  export type LobbyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * The filter to search for the Lobby to update in case it exists.
     */
    where: LobbyWhereUniqueInput
    /**
     * In case the Lobby found by the `where` argument doesn't exist, create a new Lobby with this data.
     */
    create: XOR<LobbyCreateInput, LobbyUncheckedCreateInput>
    /**
     * In case the Lobby was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LobbyUpdateInput, LobbyUncheckedUpdateInput>
  }

  /**
   * Lobby delete
   */
  export type LobbyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
    /**
     * Filter which Lobby to delete.
     */
    where: LobbyWhereUniqueInput
  }

  /**
   * Lobby deleteMany
   */
  export type LobbyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lobbies to delete
     */
    where?: LobbyWhereInput
    /**
     * Limit how many Lobbies to delete.
     */
    limit?: number
  }

  /**
   * Lobby.participants
   */
  export type Lobby$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    cursor?: LobbyParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * Lobby without action
   */
  export type LobbyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lobby
     */
    select?: LobbySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lobby
     */
    omit?: LobbyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyInclude<ExtArgs> | null
  }


  /**
   * Model LobbyParticipant
   */

  export type AggregateLobbyParticipant = {
    _count: LobbyParticipantCountAggregateOutputType | null
    _min: LobbyParticipantMinAggregateOutputType | null
    _max: LobbyParticipantMaxAggregateOutputType | null
  }

  export type LobbyParticipantMinAggregateOutputType = {
    lobbyId: string | null
    userId: string | null
    role: $Enums.ParticipantRole | null
    joinedAt: Date | null
  }

  export type LobbyParticipantMaxAggregateOutputType = {
    lobbyId: string | null
    userId: string | null
    role: $Enums.ParticipantRole | null
    joinedAt: Date | null
  }

  export type LobbyParticipantCountAggregateOutputType = {
    lobbyId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type LobbyParticipantMinAggregateInputType = {
    lobbyId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type LobbyParticipantMaxAggregateInputType = {
    lobbyId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type LobbyParticipantCountAggregateInputType = {
    lobbyId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type LobbyParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyParticipant to aggregate.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LobbyParticipants
    **/
    _count?: true | LobbyParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LobbyParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LobbyParticipantMaxAggregateInputType
  }

  export type GetLobbyParticipantAggregateType<T extends LobbyParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateLobbyParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLobbyParticipant[P]>
      : GetScalarType<T[P], AggregateLobbyParticipant[P]>
  }




  export type LobbyParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LobbyParticipantWhereInput
    orderBy?: LobbyParticipantOrderByWithAggregationInput | LobbyParticipantOrderByWithAggregationInput[]
    by: LobbyParticipantScalarFieldEnum[] | LobbyParticipantScalarFieldEnum
    having?: LobbyParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LobbyParticipantCountAggregateInputType | true
    _min?: LobbyParticipantMinAggregateInputType
    _max?: LobbyParticipantMaxAggregateInputType
  }

  export type LobbyParticipantGroupByOutputType = {
    lobbyId: string
    userId: string
    role: $Enums.ParticipantRole
    joinedAt: Date
    _count: LobbyParticipantCountAggregateOutputType | null
    _min: LobbyParticipantMinAggregateOutputType | null
    _max: LobbyParticipantMaxAggregateOutputType | null
  }

  type GetLobbyParticipantGroupByPayload<T extends LobbyParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LobbyParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LobbyParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LobbyParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], LobbyParticipantGroupByOutputType[P]>
        }
      >
    >


  export type LobbyParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lobbyId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyParticipant"]>

  export type LobbyParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lobbyId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyParticipant"]>

  export type LobbyParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lobbyId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lobbyParticipant"]>

  export type LobbyParticipantSelectScalar = {
    lobbyId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type LobbyParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lobbyId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["lobbyParticipant"]>
  export type LobbyParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LobbyParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LobbyParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lobby?: boolean | LobbyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LobbyParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LobbyParticipant"
    objects: {
      lobby: Prisma.$LobbyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      lobbyId: string
      userId: string
      role: $Enums.ParticipantRole
      joinedAt: Date
    }, ExtArgs["result"]["lobbyParticipant"]>
    composites: {}
  }

  type LobbyParticipantGetPayload<S extends boolean | null | undefined | LobbyParticipantDefaultArgs> = $Result.GetResult<Prisma.$LobbyParticipantPayload, S>

  type LobbyParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LobbyParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LobbyParticipantCountAggregateInputType | true
    }

  export interface LobbyParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LobbyParticipant'], meta: { name: 'LobbyParticipant' } }
    /**
     * Find zero or one LobbyParticipant that matches the filter.
     * @param {LobbyParticipantFindUniqueArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LobbyParticipantFindUniqueArgs>(args: SelectSubset<T, LobbyParticipantFindUniqueArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LobbyParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LobbyParticipantFindUniqueOrThrowArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LobbyParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, LobbyParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindFirstArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LobbyParticipantFindFirstArgs>(args?: SelectSubset<T, LobbyParticipantFindFirstArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LobbyParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindFirstOrThrowArgs} args - Arguments to find a LobbyParticipant
     * @example
     * // Get one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LobbyParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, LobbyParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LobbyParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LobbyParticipants
     * const lobbyParticipants = await prisma.lobbyParticipant.findMany()
     * 
     * // Get first 10 LobbyParticipants
     * const lobbyParticipants = await prisma.lobbyParticipant.findMany({ take: 10 })
     * 
     * // Only select the `lobbyId`
     * const lobbyParticipantWithLobbyIdOnly = await prisma.lobbyParticipant.findMany({ select: { lobbyId: true } })
     * 
     */
    findMany<T extends LobbyParticipantFindManyArgs>(args?: SelectSubset<T, LobbyParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LobbyParticipant.
     * @param {LobbyParticipantCreateArgs} args - Arguments to create a LobbyParticipant.
     * @example
     * // Create one LobbyParticipant
     * const LobbyParticipant = await prisma.lobbyParticipant.create({
     *   data: {
     *     // ... data to create a LobbyParticipant
     *   }
     * })
     * 
     */
    create<T extends LobbyParticipantCreateArgs>(args: SelectSubset<T, LobbyParticipantCreateArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LobbyParticipants.
     * @param {LobbyParticipantCreateManyArgs} args - Arguments to create many LobbyParticipants.
     * @example
     * // Create many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LobbyParticipantCreateManyArgs>(args?: SelectSubset<T, LobbyParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LobbyParticipants and returns the data saved in the database.
     * @param {LobbyParticipantCreateManyAndReturnArgs} args - Arguments to create many LobbyParticipants.
     * @example
     * // Create many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LobbyParticipants and only return the `lobbyId`
     * const lobbyParticipantWithLobbyIdOnly = await prisma.lobbyParticipant.createManyAndReturn({
     *   select: { lobbyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LobbyParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, LobbyParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LobbyParticipant.
     * @param {LobbyParticipantDeleteArgs} args - Arguments to delete one LobbyParticipant.
     * @example
     * // Delete one LobbyParticipant
     * const LobbyParticipant = await prisma.lobbyParticipant.delete({
     *   where: {
     *     // ... filter to delete one LobbyParticipant
     *   }
     * })
     * 
     */
    delete<T extends LobbyParticipantDeleteArgs>(args: SelectSubset<T, LobbyParticipantDeleteArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LobbyParticipant.
     * @param {LobbyParticipantUpdateArgs} args - Arguments to update one LobbyParticipant.
     * @example
     * // Update one LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LobbyParticipantUpdateArgs>(args: SelectSubset<T, LobbyParticipantUpdateArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LobbyParticipants.
     * @param {LobbyParticipantDeleteManyArgs} args - Arguments to filter LobbyParticipants to delete.
     * @example
     * // Delete a few LobbyParticipants
     * const { count } = await prisma.lobbyParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LobbyParticipantDeleteManyArgs>(args?: SelectSubset<T, LobbyParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LobbyParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LobbyParticipantUpdateManyArgs>(args: SelectSubset<T, LobbyParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LobbyParticipants and returns the data updated in the database.
     * @param {LobbyParticipantUpdateManyAndReturnArgs} args - Arguments to update many LobbyParticipants.
     * @example
     * // Update many LobbyParticipants
     * const lobbyParticipant = await prisma.lobbyParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LobbyParticipants and only return the `lobbyId`
     * const lobbyParticipantWithLobbyIdOnly = await prisma.lobbyParticipant.updateManyAndReturn({
     *   select: { lobbyId: true },
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
    updateManyAndReturn<T extends LobbyParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, LobbyParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LobbyParticipant.
     * @param {LobbyParticipantUpsertArgs} args - Arguments to update or create a LobbyParticipant.
     * @example
     * // Update or create a LobbyParticipant
     * const lobbyParticipant = await prisma.lobbyParticipant.upsert({
     *   create: {
     *     // ... data to create a LobbyParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LobbyParticipant we want to update
     *   }
     * })
     */
    upsert<T extends LobbyParticipantUpsertArgs>(args: SelectSubset<T, LobbyParticipantUpsertArgs<ExtArgs>>): Prisma__LobbyParticipantClient<$Result.GetResult<Prisma.$LobbyParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LobbyParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantCountArgs} args - Arguments to filter LobbyParticipants to count.
     * @example
     * // Count the number of LobbyParticipants
     * const count = await prisma.lobbyParticipant.count({
     *   where: {
     *     // ... the filter for the LobbyParticipants we want to count
     *   }
     * })
    **/
    count<T extends LobbyParticipantCountArgs>(
      args?: Subset<T, LobbyParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LobbyParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LobbyParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LobbyParticipantAggregateArgs>(args: Subset<T, LobbyParticipantAggregateArgs>): Prisma.PrismaPromise<GetLobbyParticipantAggregateType<T>>

    /**
     * Group by LobbyParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LobbyParticipantGroupByArgs} args - Group by arguments.
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
      T extends LobbyParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LobbyParticipantGroupByArgs['orderBy'] }
        : { orderBy?: LobbyParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LobbyParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLobbyParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LobbyParticipant model
   */
  readonly fields: LobbyParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LobbyParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LobbyParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lobby<T extends LobbyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LobbyDefaultArgs<ExtArgs>>): Prisma__LobbyClient<$Result.GetResult<Prisma.$LobbyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LobbyParticipant model
   */
  interface LobbyParticipantFieldRefs {
    readonly lobbyId: FieldRef<"LobbyParticipant", 'String'>
    readonly userId: FieldRef<"LobbyParticipant", 'String'>
    readonly role: FieldRef<"LobbyParticipant", 'ParticipantRole'>
    readonly joinedAt: FieldRef<"LobbyParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LobbyParticipant findUnique
   */
  export type LobbyParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant findUniqueOrThrow
   */
  export type LobbyParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant findFirst
   */
  export type LobbyParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyParticipants.
     */
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant findFirstOrThrow
   */
  export type LobbyParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipant to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LobbyParticipants.
     */
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant findMany
   */
  export type LobbyParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter, which LobbyParticipants to fetch.
     */
    where?: LobbyParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LobbyParticipants to fetch.
     */
    orderBy?: LobbyParticipantOrderByWithRelationInput | LobbyParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LobbyParticipants.
     */
    cursor?: LobbyParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LobbyParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LobbyParticipants.
     */
    skip?: number
    distinct?: LobbyParticipantScalarFieldEnum | LobbyParticipantScalarFieldEnum[]
  }

  /**
   * LobbyParticipant create
   */
  export type LobbyParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a LobbyParticipant.
     */
    data: XOR<LobbyParticipantCreateInput, LobbyParticipantUncheckedCreateInput>
  }

  /**
   * LobbyParticipant createMany
   */
  export type LobbyParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LobbyParticipants.
     */
    data: LobbyParticipantCreateManyInput | LobbyParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LobbyParticipant createManyAndReturn
   */
  export type LobbyParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many LobbyParticipants.
     */
    data: LobbyParticipantCreateManyInput | LobbyParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LobbyParticipant update
   */
  export type LobbyParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a LobbyParticipant.
     */
    data: XOR<LobbyParticipantUpdateInput, LobbyParticipantUncheckedUpdateInput>
    /**
     * Choose, which LobbyParticipant to update.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant updateMany
   */
  export type LobbyParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LobbyParticipants.
     */
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyInput>
    /**
     * Filter which LobbyParticipants to update
     */
    where?: LobbyParticipantWhereInput
    /**
     * Limit how many LobbyParticipants to update.
     */
    limit?: number
  }

  /**
   * LobbyParticipant updateManyAndReturn
   */
  export type LobbyParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * The data used to update LobbyParticipants.
     */
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyInput>
    /**
     * Filter which LobbyParticipants to update
     */
    where?: LobbyParticipantWhereInput
    /**
     * Limit how many LobbyParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LobbyParticipant upsert
   */
  export type LobbyParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the LobbyParticipant to update in case it exists.
     */
    where: LobbyParticipantWhereUniqueInput
    /**
     * In case the LobbyParticipant found by the `where` argument doesn't exist, create a new LobbyParticipant with this data.
     */
    create: XOR<LobbyParticipantCreateInput, LobbyParticipantUncheckedCreateInput>
    /**
     * In case the LobbyParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LobbyParticipantUpdateInput, LobbyParticipantUncheckedUpdateInput>
  }

  /**
   * LobbyParticipant delete
   */
  export type LobbyParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
    /**
     * Filter which LobbyParticipant to delete.
     */
    where: LobbyParticipantWhereUniqueInput
  }

  /**
   * LobbyParticipant deleteMany
   */
  export type LobbyParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LobbyParticipants to delete
     */
    where?: LobbyParticipantWhereInput
    /**
     * Limit how many LobbyParticipants to delete.
     */
    limit?: number
  }

  /**
   * LobbyParticipant without action
   */
  export type LobbyParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LobbyParticipant
     */
    select?: LobbyParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LobbyParticipant
     */
    omit?: LobbyParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LobbyParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Meme
   */

  export type AggregateMeme = {
    _count: MemeCountAggregateOutputType | null
    _avg: MemeAvgAggregateOutputType | null
    _sum: MemeSumAggregateOutputType | null
    _min: MemeMinAggregateOutputType | null
    _max: MemeMaxAggregateOutputType | null
  }

  export type MemeAvgAggregateOutputType = {
    likes: number | null
  }

  export type MemeSumAggregateOutputType = {
    likes: number | null
  }

  export type MemeMinAggregateOutputType = {
    id: string | null
    caption: string | null
    imageUrl: string | null
    likes: number | null
    authorId: string | null
    createdAt: Date | null
  }

  export type MemeMaxAggregateOutputType = {
    id: string | null
    caption: string | null
    imageUrl: string | null
    likes: number | null
    authorId: string | null
    createdAt: Date | null
  }

  export type MemeCountAggregateOutputType = {
    id: number
    caption: number
    imageUrl: number
    likes: number
    authorId: number
    createdAt: number
    _all: number
  }


  export type MemeAvgAggregateInputType = {
    likes?: true
  }

  export type MemeSumAggregateInputType = {
    likes?: true
  }

  export type MemeMinAggregateInputType = {
    id?: true
    caption?: true
    imageUrl?: true
    likes?: true
    authorId?: true
    createdAt?: true
  }

  export type MemeMaxAggregateInputType = {
    id?: true
    caption?: true
    imageUrl?: true
    likes?: true
    authorId?: true
    createdAt?: true
  }

  export type MemeCountAggregateInputType = {
    id?: true
    caption?: true
    imageUrl?: true
    likes?: true
    authorId?: true
    createdAt?: true
    _all?: true
  }

  export type MemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meme to aggregate.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memes
    **/
    _count?: true | MemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemeMaxAggregateInputType
  }

  export type GetMemeAggregateType<T extends MemeAggregateArgs> = {
        [P in keyof T & keyof AggregateMeme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeme[P]>
      : GetScalarType<T[P], AggregateMeme[P]>
  }




  export type MemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemeWhereInput
    orderBy?: MemeOrderByWithAggregationInput | MemeOrderByWithAggregationInput[]
    by: MemeScalarFieldEnum[] | MemeScalarFieldEnum
    having?: MemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemeCountAggregateInputType | true
    _avg?: MemeAvgAggregateInputType
    _sum?: MemeSumAggregateInputType
    _min?: MemeMinAggregateInputType
    _max?: MemeMaxAggregateInputType
  }

  export type MemeGroupByOutputType = {
    id: string
    caption: string
    imageUrl: string
    likes: number
    authorId: string
    createdAt: Date
    _count: MemeCountAggregateOutputType | null
    _avg: MemeAvgAggregateOutputType | null
    _sum: MemeSumAggregateOutputType | null
    _min: MemeMinAggregateOutputType | null
    _max: MemeMaxAggregateOutputType | null
  }

  type GetMemeGroupByPayload<T extends MemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemeGroupByOutputType[P]>
            : GetScalarType<T[P], MemeGroupByOutputType[P]>
        }
      >
    >


  export type MemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    imageUrl?: boolean
    likes?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meme"]>

  export type MemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    imageUrl?: boolean
    likes?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meme"]>

  export type MemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caption?: boolean
    imageUrl?: boolean
    likes?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meme"]>

  export type MemeSelectScalar = {
    id?: boolean
    caption?: boolean
    imageUrl?: boolean
    likes?: boolean
    authorId?: boolean
    createdAt?: boolean
  }

  export type MemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caption" | "imageUrl" | "likes" | "authorId" | "createdAt", ExtArgs["result"]["meme"]>
  export type MemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meme"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caption: string
      imageUrl: string
      likes: number
      authorId: string
      createdAt: Date
    }, ExtArgs["result"]["meme"]>
    composites: {}
  }

  type MemeGetPayload<S extends boolean | null | undefined | MemeDefaultArgs> = $Result.GetResult<Prisma.$MemePayload, S>

  type MemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemeCountAggregateInputType | true
    }

  export interface MemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meme'], meta: { name: 'Meme' } }
    /**
     * Find zero or one Meme that matches the filter.
     * @param {MemeFindUniqueArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemeFindUniqueArgs>(args: SelectSubset<T, MemeFindUniqueArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemeFindUniqueOrThrowArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemeFindUniqueOrThrowArgs>(args: SelectSubset<T, MemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindFirstArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemeFindFirstArgs>(args?: SelectSubset<T, MemeFindFirstArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindFirstOrThrowArgs} args - Arguments to find a Meme
     * @example
     * // Get one Meme
     * const meme = await prisma.meme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemeFindFirstOrThrowArgs>(args?: SelectSubset<T, MemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memes
     * const memes = await prisma.meme.findMany()
     * 
     * // Get first 10 Memes
     * const memes = await prisma.meme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memeWithIdOnly = await prisma.meme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemeFindManyArgs>(args?: SelectSubset<T, MemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meme.
     * @param {MemeCreateArgs} args - Arguments to create a Meme.
     * @example
     * // Create one Meme
     * const Meme = await prisma.meme.create({
     *   data: {
     *     // ... data to create a Meme
     *   }
     * })
     * 
     */
    create<T extends MemeCreateArgs>(args: SelectSubset<T, MemeCreateArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memes.
     * @param {MemeCreateManyArgs} args - Arguments to create many Memes.
     * @example
     * // Create many Memes
     * const meme = await prisma.meme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemeCreateManyArgs>(args?: SelectSubset<T, MemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memes and returns the data saved in the database.
     * @param {MemeCreateManyAndReturnArgs} args - Arguments to create many Memes.
     * @example
     * // Create many Memes
     * const meme = await prisma.meme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memes and only return the `id`
     * const memeWithIdOnly = await prisma.meme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemeCreateManyAndReturnArgs>(args?: SelectSubset<T, MemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meme.
     * @param {MemeDeleteArgs} args - Arguments to delete one Meme.
     * @example
     * // Delete one Meme
     * const Meme = await prisma.meme.delete({
     *   where: {
     *     // ... filter to delete one Meme
     *   }
     * })
     * 
     */
    delete<T extends MemeDeleteArgs>(args: SelectSubset<T, MemeDeleteArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meme.
     * @param {MemeUpdateArgs} args - Arguments to update one Meme.
     * @example
     * // Update one Meme
     * const meme = await prisma.meme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemeUpdateArgs>(args: SelectSubset<T, MemeUpdateArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memes.
     * @param {MemeDeleteManyArgs} args - Arguments to filter Memes to delete.
     * @example
     * // Delete a few Memes
     * const { count } = await prisma.meme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemeDeleteManyArgs>(args?: SelectSubset<T, MemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memes
     * const meme = await prisma.meme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemeUpdateManyArgs>(args: SelectSubset<T, MemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memes and returns the data updated in the database.
     * @param {MemeUpdateManyAndReturnArgs} args - Arguments to update many Memes.
     * @example
     * // Update many Memes
     * const meme = await prisma.meme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memes and only return the `id`
     * const memeWithIdOnly = await prisma.meme.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemeUpdateManyAndReturnArgs>(args: SelectSubset<T, MemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meme.
     * @param {MemeUpsertArgs} args - Arguments to update or create a Meme.
     * @example
     * // Update or create a Meme
     * const meme = await prisma.meme.upsert({
     *   create: {
     *     // ... data to create a Meme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meme we want to update
     *   }
     * })
     */
    upsert<T extends MemeUpsertArgs>(args: SelectSubset<T, MemeUpsertArgs<ExtArgs>>): Prisma__MemeClient<$Result.GetResult<Prisma.$MemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeCountArgs} args - Arguments to filter Memes to count.
     * @example
     * // Count the number of Memes
     * const count = await prisma.meme.count({
     *   where: {
     *     // ... the filter for the Memes we want to count
     *   }
     * })
    **/
    count<T extends MemeCountArgs>(
      args?: Subset<T, MemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemeAggregateArgs>(args: Subset<T, MemeAggregateArgs>): Prisma.PrismaPromise<GetMemeAggregateType<T>>

    /**
     * Group by Meme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemeGroupByArgs} args - Group by arguments.
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
      T extends MemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemeGroupByArgs['orderBy'] }
        : { orderBy?: MemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meme model
   */
  readonly fields: MemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meme model
   */
  interface MemeFieldRefs {
    readonly id: FieldRef<"Meme", 'String'>
    readonly caption: FieldRef<"Meme", 'String'>
    readonly imageUrl: FieldRef<"Meme", 'String'>
    readonly likes: FieldRef<"Meme", 'Int'>
    readonly authorId: FieldRef<"Meme", 'String'>
    readonly createdAt: FieldRef<"Meme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meme findUnique
   */
  export type MemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme findUniqueOrThrow
   */
  export type MemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme findFirst
   */
  export type MemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memes.
     */
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme findFirstOrThrow
   */
  export type MemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Meme to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memes.
     */
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme findMany
   */
  export type MemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter, which Memes to fetch.
     */
    where?: MemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memes to fetch.
     */
    orderBy?: MemeOrderByWithRelationInput | MemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memes.
     */
    cursor?: MemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memes.
     */
    skip?: number
    distinct?: MemeScalarFieldEnum | MemeScalarFieldEnum[]
  }

  /**
   * Meme create
   */
  export type MemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Meme.
     */
    data: XOR<MemeCreateInput, MemeUncheckedCreateInput>
  }

  /**
   * Meme createMany
   */
  export type MemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memes.
     */
    data: MemeCreateManyInput | MemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meme createManyAndReturn
   */
  export type MemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * The data used to create many Memes.
     */
    data: MemeCreateManyInput | MemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meme update
   */
  export type MemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Meme.
     */
    data: XOR<MemeUpdateInput, MemeUncheckedUpdateInput>
    /**
     * Choose, which Meme to update.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme updateMany
   */
  export type MemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memes.
     */
    data: XOR<MemeUpdateManyMutationInput, MemeUncheckedUpdateManyInput>
    /**
     * Filter which Memes to update
     */
    where?: MemeWhereInput
    /**
     * Limit how many Memes to update.
     */
    limit?: number
  }

  /**
   * Meme updateManyAndReturn
   */
  export type MemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * The data used to update Memes.
     */
    data: XOR<MemeUpdateManyMutationInput, MemeUncheckedUpdateManyInput>
    /**
     * Filter which Memes to update
     */
    where?: MemeWhereInput
    /**
     * Limit how many Memes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meme upsert
   */
  export type MemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Meme to update in case it exists.
     */
    where: MemeWhereUniqueInput
    /**
     * In case the Meme found by the `where` argument doesn't exist, create a new Meme with this data.
     */
    create: XOR<MemeCreateInput, MemeUncheckedCreateInput>
    /**
     * In case the Meme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemeUpdateInput, MemeUncheckedUpdateInput>
  }

  /**
   * Meme delete
   */
  export type MemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
    /**
     * Filter which Meme to delete.
     */
    where: MemeWhereUniqueInput
  }

  /**
   * Meme deleteMany
   */
  export type MemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memes to delete
     */
    where?: MemeWhereInput
    /**
     * Limit how many Memes to delete.
     */
    limit?: number
  }

  /**
   * Meme without action
   */
  export type MemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meme
     */
    select?: MemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meme
     */
    omit?: MemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemeInclude<ExtArgs> | null
  }


  /**
   * Model Podcast
   */

  export type AggregatePodcast = {
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  export type PodcastAvgAggregateOutputType = {
    duration: number | null
  }

  export type PodcastSumAggregateOutputType = {
    duration: number | null
  }

  export type PodcastMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    audioUrl: string | null
    duration: number | null
    hostId: string | null
    createdAt: Date | null
  }

  export type PodcastMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    audioUrl: string | null
    duration: number | null
    hostId: string | null
    createdAt: Date | null
  }

  export type PodcastCountAggregateOutputType = {
    id: number
    title: number
    description: number
    audioUrl: number
    duration: number
    hostId: number
    createdAt: number
    _all: number
  }


  export type PodcastAvgAggregateInputType = {
    duration?: true
  }

  export type PodcastSumAggregateInputType = {
    duration?: true
  }

  export type PodcastMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    audioUrl?: true
    duration?: true
    hostId?: true
    createdAt?: true
  }

  export type PodcastMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    audioUrl?: true
    duration?: true
    hostId?: true
    createdAt?: true
  }

  export type PodcastCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    audioUrl?: true
    duration?: true
    hostId?: true
    createdAt?: true
    _all?: true
  }

  export type PodcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Podcast to aggregate.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Podcasts
    **/
    _count?: true | PodcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PodcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PodcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodcastMaxAggregateInputType
  }

  export type GetPodcastAggregateType<T extends PodcastAggregateArgs> = {
        [P in keyof T & keyof AggregatePodcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePodcast[P]>
      : GetScalarType<T[P], AggregatePodcast[P]>
  }




  export type PodcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastWhereInput
    orderBy?: PodcastOrderByWithAggregationInput | PodcastOrderByWithAggregationInput[]
    by: PodcastScalarFieldEnum[] | PodcastScalarFieldEnum
    having?: PodcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodcastCountAggregateInputType | true
    _avg?: PodcastAvgAggregateInputType
    _sum?: PodcastSumAggregateInputType
    _min?: PodcastMinAggregateInputType
    _max?: PodcastMaxAggregateInputType
  }

  export type PodcastGroupByOutputType = {
    id: string
    title: string
    description: string | null
    audioUrl: string
    duration: number | null
    hostId: string
    createdAt: Date
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  type GetPodcastGroupByPayload<T extends PodcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodcastGroupByOutputType[P]>
            : GetScalarType<T[P], PodcastGroupByOutputType[P]>
        }
      >
    >


  export type PodcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    audioUrl?: boolean
    duration?: boolean
    hostId?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    audioUrl?: boolean
    duration?: boolean
    hostId?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    audioUrl?: boolean
    duration?: boolean
    hostId?: boolean
    createdAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    audioUrl?: boolean
    duration?: boolean
    hostId?: boolean
    createdAt?: boolean
  }

  export type PodcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "audioUrl" | "duration" | "hostId" | "createdAt", ExtArgs["result"]["podcast"]>
  export type PodcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PodcastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PodcastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PodcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Podcast"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      audioUrl: string
      duration: number | null
      hostId: string
      createdAt: Date
    }, ExtArgs["result"]["podcast"]>
    composites: {}
  }

  type PodcastGetPayload<S extends boolean | null | undefined | PodcastDefaultArgs> = $Result.GetResult<Prisma.$PodcastPayload, S>

  type PodcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PodcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PodcastCountAggregateInputType | true
    }

  export interface PodcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Podcast'], meta: { name: 'Podcast' } }
    /**
     * Find zero or one Podcast that matches the filter.
     * @param {PodcastFindUniqueArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PodcastFindUniqueArgs>(args: SelectSubset<T, PodcastFindUniqueArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Podcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PodcastFindUniqueOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PodcastFindUniqueOrThrowArgs>(args: SelectSubset<T, PodcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Podcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PodcastFindFirstArgs>(args?: SelectSubset<T, PodcastFindFirstArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Podcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PodcastFindFirstOrThrowArgs>(args?: SelectSubset<T, PodcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Podcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Podcasts
     * const podcasts = await prisma.podcast.findMany()
     * 
     * // Get first 10 Podcasts
     * const podcasts = await prisma.podcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podcastWithIdOnly = await prisma.podcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PodcastFindManyArgs>(args?: SelectSubset<T, PodcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Podcast.
     * @param {PodcastCreateArgs} args - Arguments to create a Podcast.
     * @example
     * // Create one Podcast
     * const Podcast = await prisma.podcast.create({
     *   data: {
     *     // ... data to create a Podcast
     *   }
     * })
     * 
     */
    create<T extends PodcastCreateArgs>(args: SelectSubset<T, PodcastCreateArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Podcasts.
     * @param {PodcastCreateManyArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcast = await prisma.podcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PodcastCreateManyArgs>(args?: SelectSubset<T, PodcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Podcasts and returns the data saved in the database.
     * @param {PodcastCreateManyAndReturnArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcast = await prisma.podcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Podcasts and only return the `id`
     * const podcastWithIdOnly = await prisma.podcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PodcastCreateManyAndReturnArgs>(args?: SelectSubset<T, PodcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Podcast.
     * @param {PodcastDeleteArgs} args - Arguments to delete one Podcast.
     * @example
     * // Delete one Podcast
     * const Podcast = await prisma.podcast.delete({
     *   where: {
     *     // ... filter to delete one Podcast
     *   }
     * })
     * 
     */
    delete<T extends PodcastDeleteArgs>(args: SelectSubset<T, PodcastDeleteArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Podcast.
     * @param {PodcastUpdateArgs} args - Arguments to update one Podcast.
     * @example
     * // Update one Podcast
     * const podcast = await prisma.podcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PodcastUpdateArgs>(args: SelectSubset<T, PodcastUpdateArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Podcasts.
     * @param {PodcastDeleteManyArgs} args - Arguments to filter Podcasts to delete.
     * @example
     * // Delete a few Podcasts
     * const { count } = await prisma.podcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PodcastDeleteManyArgs>(args?: SelectSubset<T, PodcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Podcasts
     * const podcast = await prisma.podcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PodcastUpdateManyArgs>(args: SelectSubset<T, PodcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts and returns the data updated in the database.
     * @param {PodcastUpdateManyAndReturnArgs} args - Arguments to update many Podcasts.
     * @example
     * // Update many Podcasts
     * const podcast = await prisma.podcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Podcasts and only return the `id`
     * const podcastWithIdOnly = await prisma.podcast.updateManyAndReturn({
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
    updateManyAndReturn<T extends PodcastUpdateManyAndReturnArgs>(args: SelectSubset<T, PodcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Podcast.
     * @param {PodcastUpsertArgs} args - Arguments to update or create a Podcast.
     * @example
     * // Update or create a Podcast
     * const podcast = await prisma.podcast.upsert({
     *   create: {
     *     // ... data to create a Podcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Podcast we want to update
     *   }
     * })
     */
    upsert<T extends PodcastUpsertArgs>(args: SelectSubset<T, PodcastUpsertArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastCountArgs} args - Arguments to filter Podcasts to count.
     * @example
     * // Count the number of Podcasts
     * const count = await prisma.podcast.count({
     *   where: {
     *     // ... the filter for the Podcasts we want to count
     *   }
     * })
    **/
    count<T extends PodcastCountArgs>(
      args?: Subset<T, PodcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PodcastAggregateArgs>(args: Subset<T, PodcastAggregateArgs>): Prisma.PrismaPromise<GetPodcastAggregateType<T>>

    /**
     * Group by Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastGroupByArgs} args - Group by arguments.
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
      T extends PodcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PodcastGroupByArgs['orderBy'] }
        : { orderBy?: PodcastGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PodcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Podcast model
   */
  readonly fields: PodcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Podcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PodcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Podcast model
   */
  interface PodcastFieldRefs {
    readonly id: FieldRef<"Podcast", 'String'>
    readonly title: FieldRef<"Podcast", 'String'>
    readonly description: FieldRef<"Podcast", 'String'>
    readonly audioUrl: FieldRef<"Podcast", 'String'>
    readonly duration: FieldRef<"Podcast", 'Int'>
    readonly hostId: FieldRef<"Podcast", 'String'>
    readonly createdAt: FieldRef<"Podcast", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Podcast findUnique
   */
  export type PodcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast findUniqueOrThrow
   */
  export type PodcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast findFirst
   */
  export type PodcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast findFirstOrThrow
   */
  export type PodcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast findMany
   */
  export type PodcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcasts to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast create
   */
  export type PodcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The data needed to create a Podcast.
     */
    data: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
  }

  /**
   * Podcast createMany
   */
  export type PodcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Podcasts.
     */
    data: PodcastCreateManyInput | PodcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Podcast createManyAndReturn
   */
  export type PodcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * The data used to create many Podcasts.
     */
    data: PodcastCreateManyInput | PodcastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Podcast update
   */
  export type PodcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The data needed to update a Podcast.
     */
    data: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
    /**
     * Choose, which Podcast to update.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast updateMany
   */
  export type PodcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Podcasts.
     */
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyInput>
    /**
     * Filter which Podcasts to update
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to update.
     */
    limit?: number
  }

  /**
   * Podcast updateManyAndReturn
   */
  export type PodcastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * The data used to update Podcasts.
     */
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyInput>
    /**
     * Filter which Podcasts to update
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Podcast upsert
   */
  export type PodcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The filter to search for the Podcast to update in case it exists.
     */
    where: PodcastWhereUniqueInput
    /**
     * In case the Podcast found by the `where` argument doesn't exist, create a new Podcast with this data.
     */
    create: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
    /**
     * In case the Podcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
  }

  /**
   * Podcast delete
   */
  export type PodcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter which Podcast to delete.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast deleteMany
   */
  export type PodcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Podcasts to delete
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to delete.
     */
    limit?: number
  }

  /**
   * Podcast without action
   */
  export type PodcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    scheduledFor: Date | null
    organizerId: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    scheduledFor: Date | null
    organizerId: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    scheduledFor: number
    organizerId: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scheduledFor?: true
    organizerId?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scheduledFor?: true
    organizerId?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    scheduledFor?: true
    organizerId?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    scheduledFor: Date
    organizerId: string
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    scheduledFor?: boolean
    organizerId?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    scheduledFor?: boolean
    organizerId?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    scheduledFor?: boolean
    organizerId?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    scheduledFor?: boolean
    organizerId?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "scheduledFor" | "organizerId" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      scheduledFor: Date
      organizerId: string
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly scheduledFor: FieldRef<"Event", 'DateTime'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    readCount: number | null
    likesCount: number | null
  }

  export type ArticleSumAggregateOutputType = {
    readCount: number | null
    likesCount: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    authorId: string | null
    readCount: number | null
    likesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    summary: string | null
    authorId: string | null
    readCount: number | null
    likesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    summary: number
    authorId: number
    readCount: number
    likesCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    readCount?: true
    likesCount?: true
  }

  export type ArticleSumAggregateInputType = {
    readCount?: true
    likesCount?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    authorId?: true
    readCount?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    authorId?: true
    readCount?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    summary?: true
    authorId?: true
    readCount?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    content: string
    summary: string | null
    authorId: string
    readCount: number
    likesCount: number
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    authorId?: boolean
    readCount?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    readers?: boolean | Article$readersArgs<ExtArgs>
    likes?: boolean | Article$likesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    authorId?: boolean
    readCount?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    authorId?: boolean
    readCount?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    summary?: boolean
    authorId?: boolean
    readCount?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "summary" | "authorId" | "readCount" | "likesCount" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    readers?: boolean | Article$readersArgs<ExtArgs>
    likes?: boolean | Article$likesArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      readers: Prisma.$ArticleReadPayload<ExtArgs>[]
      likes: Prisma.$ArticleLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      summary: string | null
      authorId: string
      readCount: number
      likesCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readers<T extends Article$readersArgs<ExtArgs> = {}>(args?: Subset<T, Article$readersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Article$likesArgs<ExtArgs> = {}>(args?: Subset<T, Article$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly summary: FieldRef<"Article", 'String'>
    readonly authorId: FieldRef<"Article", 'String'>
    readonly readCount: FieldRef<"Article", 'Int'>
    readonly likesCount: FieldRef<"Article", 'Int'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.readers
   */
  export type Article$readersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    where?: ArticleReadWhereInput
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    cursor?: ArticleReadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleReadScalarFieldEnum | ArticleReadScalarFieldEnum[]
  }

  /**
   * Article.likes
   */
  export type Article$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    cursor?: ArticleLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model ArticleRead
   */

  export type AggregateArticleRead = {
    _count: ArticleReadCountAggregateOutputType | null
    _min: ArticleReadMinAggregateOutputType | null
    _max: ArticleReadMaxAggregateOutputType | null
  }

  export type ArticleReadMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    readAt: Date | null
  }

  export type ArticleReadMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    readAt: Date | null
  }

  export type ArticleReadCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    readAt: number
    _all: number
  }


  export type ArticleReadMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    readAt?: true
  }

  export type ArticleReadMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    readAt?: true
  }

  export type ArticleReadCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    readAt?: true
    _all?: true
  }

  export type ArticleReadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleRead to aggregate.
     */
    where?: ArticleReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleReads to fetch.
     */
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleReads
    **/
    _count?: true | ArticleReadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleReadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleReadMaxAggregateInputType
  }

  export type GetArticleReadAggregateType<T extends ArticleReadAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleRead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleRead[P]>
      : GetScalarType<T[P], AggregateArticleRead[P]>
  }




  export type ArticleReadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleReadWhereInput
    orderBy?: ArticleReadOrderByWithAggregationInput | ArticleReadOrderByWithAggregationInput[]
    by: ArticleReadScalarFieldEnum[] | ArticleReadScalarFieldEnum
    having?: ArticleReadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleReadCountAggregateInputType | true
    _min?: ArticleReadMinAggregateInputType
    _max?: ArticleReadMaxAggregateInputType
  }

  export type ArticleReadGroupByOutputType = {
    id: string
    userId: string
    articleId: string
    readAt: Date
    _count: ArticleReadCountAggregateOutputType | null
    _min: ArticleReadMinAggregateOutputType | null
    _max: ArticleReadMaxAggregateOutputType | null
  }

  type GetArticleReadGroupByPayload<T extends ArticleReadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleReadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleReadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleReadGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleReadGroupByOutputType[P]>
        }
      >
    >


  export type ArticleReadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRead"]>

  export type ArticleReadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRead"]>

  export type ArticleReadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    readAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRead"]>

  export type ArticleReadSelectScalar = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    readAt?: boolean
  }

  export type ArticleReadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleId" | "readAt", ExtArgs["result"]["articleRead"]>
  export type ArticleReadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleReadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleReadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleReadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleRead"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleId: string
      readAt: Date
    }, ExtArgs["result"]["articleRead"]>
    composites: {}
  }

  type ArticleReadGetPayload<S extends boolean | null | undefined | ArticleReadDefaultArgs> = $Result.GetResult<Prisma.$ArticleReadPayload, S>

  type ArticleReadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleReadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleReadCountAggregateInputType | true
    }

  export interface ArticleReadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleRead'], meta: { name: 'ArticleRead' } }
    /**
     * Find zero or one ArticleRead that matches the filter.
     * @param {ArticleReadFindUniqueArgs} args - Arguments to find a ArticleRead
     * @example
     * // Get one ArticleRead
     * const articleRead = await prisma.articleRead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleReadFindUniqueArgs>(args: SelectSubset<T, ArticleReadFindUniqueArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleRead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleReadFindUniqueOrThrowArgs} args - Arguments to find a ArticleRead
     * @example
     * // Get one ArticleRead
     * const articleRead = await prisma.articleRead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleReadFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleReadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleRead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadFindFirstArgs} args - Arguments to find a ArticleRead
     * @example
     * // Get one ArticleRead
     * const articleRead = await prisma.articleRead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleReadFindFirstArgs>(args?: SelectSubset<T, ArticleReadFindFirstArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleRead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadFindFirstOrThrowArgs} args - Arguments to find a ArticleRead
     * @example
     * // Get one ArticleRead
     * const articleRead = await prisma.articleRead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleReadFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleReadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleReads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleReads
     * const articleReads = await prisma.articleRead.findMany()
     * 
     * // Get first 10 ArticleReads
     * const articleReads = await prisma.articleRead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleReadWithIdOnly = await prisma.articleRead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleReadFindManyArgs>(args?: SelectSubset<T, ArticleReadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleRead.
     * @param {ArticleReadCreateArgs} args - Arguments to create a ArticleRead.
     * @example
     * // Create one ArticleRead
     * const ArticleRead = await prisma.articleRead.create({
     *   data: {
     *     // ... data to create a ArticleRead
     *   }
     * })
     * 
     */
    create<T extends ArticleReadCreateArgs>(args: SelectSubset<T, ArticleReadCreateArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleReads.
     * @param {ArticleReadCreateManyArgs} args - Arguments to create many ArticleReads.
     * @example
     * // Create many ArticleReads
     * const articleRead = await prisma.articleRead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleReadCreateManyArgs>(args?: SelectSubset<T, ArticleReadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleReads and returns the data saved in the database.
     * @param {ArticleReadCreateManyAndReturnArgs} args - Arguments to create many ArticleReads.
     * @example
     * // Create many ArticleReads
     * const articleRead = await prisma.articleRead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleReads and only return the `id`
     * const articleReadWithIdOnly = await prisma.articleRead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleReadCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleReadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleRead.
     * @param {ArticleReadDeleteArgs} args - Arguments to delete one ArticleRead.
     * @example
     * // Delete one ArticleRead
     * const ArticleRead = await prisma.articleRead.delete({
     *   where: {
     *     // ... filter to delete one ArticleRead
     *   }
     * })
     * 
     */
    delete<T extends ArticleReadDeleteArgs>(args: SelectSubset<T, ArticleReadDeleteArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleRead.
     * @param {ArticleReadUpdateArgs} args - Arguments to update one ArticleRead.
     * @example
     * // Update one ArticleRead
     * const articleRead = await prisma.articleRead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleReadUpdateArgs>(args: SelectSubset<T, ArticleReadUpdateArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleReads.
     * @param {ArticleReadDeleteManyArgs} args - Arguments to filter ArticleReads to delete.
     * @example
     * // Delete a few ArticleReads
     * const { count } = await prisma.articleRead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleReadDeleteManyArgs>(args?: SelectSubset<T, ArticleReadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleReads
     * const articleRead = await prisma.articleRead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleReadUpdateManyArgs>(args: SelectSubset<T, ArticleReadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleReads and returns the data updated in the database.
     * @param {ArticleReadUpdateManyAndReturnArgs} args - Arguments to update many ArticleReads.
     * @example
     * // Update many ArticleReads
     * const articleRead = await prisma.articleRead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleReads and only return the `id`
     * const articleReadWithIdOnly = await prisma.articleRead.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleReadUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleReadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleRead.
     * @param {ArticleReadUpsertArgs} args - Arguments to update or create a ArticleRead.
     * @example
     * // Update or create a ArticleRead
     * const articleRead = await prisma.articleRead.upsert({
     *   create: {
     *     // ... data to create a ArticleRead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleRead we want to update
     *   }
     * })
     */
    upsert<T extends ArticleReadUpsertArgs>(args: SelectSubset<T, ArticleReadUpsertArgs<ExtArgs>>): Prisma__ArticleReadClient<$Result.GetResult<Prisma.$ArticleReadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleReads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadCountArgs} args - Arguments to filter ArticleReads to count.
     * @example
     * // Count the number of ArticleReads
     * const count = await prisma.articleRead.count({
     *   where: {
     *     // ... the filter for the ArticleReads we want to count
     *   }
     * })
    **/
    count<T extends ArticleReadCountArgs>(
      args?: Subset<T, ArticleReadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleReadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleReadAggregateArgs>(args: Subset<T, ArticleReadAggregateArgs>): Prisma.PrismaPromise<GetArticleReadAggregateType<T>>

    /**
     * Group by ArticleRead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleReadGroupByArgs} args - Group by arguments.
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
      T extends ArticleReadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleReadGroupByArgs['orderBy'] }
        : { orderBy?: ArticleReadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleReadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleReadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleRead model
   */
  readonly fields: ArticleReadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleRead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleReadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleRead model
   */
  interface ArticleReadFieldRefs {
    readonly id: FieldRef<"ArticleRead", 'String'>
    readonly userId: FieldRef<"ArticleRead", 'String'>
    readonly articleId: FieldRef<"ArticleRead", 'String'>
    readonly readAt: FieldRef<"ArticleRead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleRead findUnique
   */
  export type ArticleReadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRead to fetch.
     */
    where: ArticleReadWhereUniqueInput
  }

  /**
   * ArticleRead findUniqueOrThrow
   */
  export type ArticleReadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRead to fetch.
     */
    where: ArticleReadWhereUniqueInput
  }

  /**
   * ArticleRead findFirst
   */
  export type ArticleReadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRead to fetch.
     */
    where?: ArticleReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleReads to fetch.
     */
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleReads.
     */
    cursor?: ArticleReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleReads.
     */
    distinct?: ArticleReadScalarFieldEnum | ArticleReadScalarFieldEnum[]
  }

  /**
   * ArticleRead findFirstOrThrow
   */
  export type ArticleReadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRead to fetch.
     */
    where?: ArticleReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleReads to fetch.
     */
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleReads.
     */
    cursor?: ArticleReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleReads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleReads.
     */
    distinct?: ArticleReadScalarFieldEnum | ArticleReadScalarFieldEnum[]
  }

  /**
   * ArticleRead findMany
   */
  export type ArticleReadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter, which ArticleReads to fetch.
     */
    where?: ArticleReadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleReads to fetch.
     */
    orderBy?: ArticleReadOrderByWithRelationInput | ArticleReadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleReads.
     */
    cursor?: ArticleReadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleReads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleReads.
     */
    skip?: number
    distinct?: ArticleReadScalarFieldEnum | ArticleReadScalarFieldEnum[]
  }

  /**
   * ArticleRead create
   */
  export type ArticleReadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleRead.
     */
    data: XOR<ArticleReadCreateInput, ArticleReadUncheckedCreateInput>
  }

  /**
   * ArticleRead createMany
   */
  export type ArticleReadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleReads.
     */
    data: ArticleReadCreateManyInput | ArticleReadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleRead createManyAndReturn
   */
  export type ArticleReadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleReads.
     */
    data: ArticleReadCreateManyInput | ArticleReadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleRead update
   */
  export type ArticleReadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleRead.
     */
    data: XOR<ArticleReadUpdateInput, ArticleReadUncheckedUpdateInput>
    /**
     * Choose, which ArticleRead to update.
     */
    where: ArticleReadWhereUniqueInput
  }

  /**
   * ArticleRead updateMany
   */
  export type ArticleReadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleReads.
     */
    data: XOR<ArticleReadUpdateManyMutationInput, ArticleReadUncheckedUpdateManyInput>
    /**
     * Filter which ArticleReads to update
     */
    where?: ArticleReadWhereInput
    /**
     * Limit how many ArticleReads to update.
     */
    limit?: number
  }

  /**
   * ArticleRead updateManyAndReturn
   */
  export type ArticleReadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * The data used to update ArticleReads.
     */
    data: XOR<ArticleReadUpdateManyMutationInput, ArticleReadUncheckedUpdateManyInput>
    /**
     * Filter which ArticleReads to update
     */
    where?: ArticleReadWhereInput
    /**
     * Limit how many ArticleReads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleRead upsert
   */
  export type ArticleReadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleRead to update in case it exists.
     */
    where: ArticleReadWhereUniqueInput
    /**
     * In case the ArticleRead found by the `where` argument doesn't exist, create a new ArticleRead with this data.
     */
    create: XOR<ArticleReadCreateInput, ArticleReadUncheckedCreateInput>
    /**
     * In case the ArticleRead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleReadUpdateInput, ArticleReadUncheckedUpdateInput>
  }

  /**
   * ArticleRead delete
   */
  export type ArticleReadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
    /**
     * Filter which ArticleRead to delete.
     */
    where: ArticleReadWhereUniqueInput
  }

  /**
   * ArticleRead deleteMany
   */
  export type ArticleReadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleReads to delete
     */
    where?: ArticleReadWhereInput
    /**
     * Limit how many ArticleReads to delete.
     */
    limit?: number
  }

  /**
   * ArticleRead without action
   */
  export type ArticleReadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRead
     */
    select?: ArticleReadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRead
     */
    omit?: ArticleReadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleReadInclude<ExtArgs> | null
  }


  /**
   * Model ArticleLike
   */

  export type AggregateArticleLike = {
    _count: ArticleLikeCountAggregateOutputType | null
    _min: ArticleLikeMinAggregateOutputType | null
    _max: ArticleLikeMaxAggregateOutputType | null
  }

  export type ArticleLikeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type ArticleLikeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type ArticleLikeCountAggregateOutputType = {
    id: number
    userId: number
    articleId: number
    createdAt: number
    _all: number
  }


  export type ArticleLikeMinAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
  }

  export type ArticleLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
  }

  export type ArticleLikeCountAggregateInputType = {
    id?: true
    userId?: true
    articleId?: true
    createdAt?: true
    _all?: true
  }

  export type ArticleLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleLike to aggregate.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleLikes
    **/
    _count?: true | ArticleLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleLikeMaxAggregateInputType
  }

  export type GetArticleLikeAggregateType<T extends ArticleLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleLike[P]>
      : GetScalarType<T[P], AggregateArticleLike[P]>
  }




  export type ArticleLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleLikeWhereInput
    orderBy?: ArticleLikeOrderByWithAggregationInput | ArticleLikeOrderByWithAggregationInput[]
    by: ArticleLikeScalarFieldEnum[] | ArticleLikeScalarFieldEnum
    having?: ArticleLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleLikeCountAggregateInputType | true
    _min?: ArticleLikeMinAggregateInputType
    _max?: ArticleLikeMaxAggregateInputType
  }

  export type ArticleLikeGroupByOutputType = {
    id: string
    userId: string
    articleId: string
    createdAt: Date
    _count: ArticleLikeCountAggregateOutputType | null
    _min: ArticleLikeMinAggregateOutputType | null
    _max: ArticleLikeMaxAggregateOutputType | null
  }

  type GetArticleLikeGroupByPayload<T extends ArticleLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleLikeGroupByOutputType[P]>
        }
      >
    >


  export type ArticleLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleLike"]>

  export type ArticleLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleLike"]>

  export type ArticleLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleLike"]>

  export type ArticleLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    articleId?: boolean
    createdAt?: boolean
  }

  export type ArticleLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "articleId" | "createdAt", ExtArgs["result"]["articleLike"]>
  export type ArticleLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }
  export type ArticleLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    article?: boolean | ArticleDefaultArgs<ExtArgs>
  }

  export type $ArticleLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      article: Prisma.$ArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      articleId: string
      createdAt: Date
    }, ExtArgs["result"]["articleLike"]>
    composites: {}
  }

  type ArticleLikeGetPayload<S extends boolean | null | undefined | ArticleLikeDefaultArgs> = $Result.GetResult<Prisma.$ArticleLikePayload, S>

  type ArticleLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleLikeCountAggregateInputType | true
    }

  export interface ArticleLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleLike'], meta: { name: 'ArticleLike' } }
    /**
     * Find zero or one ArticleLike that matches the filter.
     * @param {ArticleLikeFindUniqueArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleLikeFindUniqueArgs>(args: SelectSubset<T, ArticleLikeFindUniqueArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleLikeFindUniqueOrThrowArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindFirstArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleLikeFindFirstArgs>(args?: SelectSubset<T, ArticleLikeFindFirstArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindFirstOrThrowArgs} args - Arguments to find a ArticleLike
     * @example
     * // Get one ArticleLike
     * const articleLike = await prisma.articleLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleLikes
     * const articleLikes = await prisma.articleLike.findMany()
     * 
     * // Get first 10 ArticleLikes
     * const articleLikes = await prisma.articleLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleLikeWithIdOnly = await prisma.articleLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleLikeFindManyArgs>(args?: SelectSubset<T, ArticleLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleLike.
     * @param {ArticleLikeCreateArgs} args - Arguments to create a ArticleLike.
     * @example
     * // Create one ArticleLike
     * const ArticleLike = await prisma.articleLike.create({
     *   data: {
     *     // ... data to create a ArticleLike
     *   }
     * })
     * 
     */
    create<T extends ArticleLikeCreateArgs>(args: SelectSubset<T, ArticleLikeCreateArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleLikes.
     * @param {ArticleLikeCreateManyArgs} args - Arguments to create many ArticleLikes.
     * @example
     * // Create many ArticleLikes
     * const articleLike = await prisma.articleLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleLikeCreateManyArgs>(args?: SelectSubset<T, ArticleLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleLikes and returns the data saved in the database.
     * @param {ArticleLikeCreateManyAndReturnArgs} args - Arguments to create many ArticleLikes.
     * @example
     * // Create many ArticleLikes
     * const articleLike = await prisma.articleLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleLikes and only return the `id`
     * const articleLikeWithIdOnly = await prisma.articleLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleLike.
     * @param {ArticleLikeDeleteArgs} args - Arguments to delete one ArticleLike.
     * @example
     * // Delete one ArticleLike
     * const ArticleLike = await prisma.articleLike.delete({
     *   where: {
     *     // ... filter to delete one ArticleLike
     *   }
     * })
     * 
     */
    delete<T extends ArticleLikeDeleteArgs>(args: SelectSubset<T, ArticleLikeDeleteArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleLike.
     * @param {ArticleLikeUpdateArgs} args - Arguments to update one ArticleLike.
     * @example
     * // Update one ArticleLike
     * const articleLike = await prisma.articleLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleLikeUpdateArgs>(args: SelectSubset<T, ArticleLikeUpdateArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleLikes.
     * @param {ArticleLikeDeleteManyArgs} args - Arguments to filter ArticleLikes to delete.
     * @example
     * // Delete a few ArticleLikes
     * const { count } = await prisma.articleLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleLikeDeleteManyArgs>(args?: SelectSubset<T, ArticleLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleLikes
     * const articleLike = await prisma.articleLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleLikeUpdateManyArgs>(args: SelectSubset<T, ArticleLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleLikes and returns the data updated in the database.
     * @param {ArticleLikeUpdateManyAndReturnArgs} args - Arguments to update many ArticleLikes.
     * @example
     * // Update many ArticleLikes
     * const articleLike = await prisma.articleLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleLikes and only return the `id`
     * const articleLikeWithIdOnly = await prisma.articleLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArticleLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleLike.
     * @param {ArticleLikeUpsertArgs} args - Arguments to update or create a ArticleLike.
     * @example
     * // Update or create a ArticleLike
     * const articleLike = await prisma.articleLike.upsert({
     *   create: {
     *     // ... data to create a ArticleLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleLike we want to update
     *   }
     * })
     */
    upsert<T extends ArticleLikeUpsertArgs>(args: SelectSubset<T, ArticleLikeUpsertArgs<ExtArgs>>): Prisma__ArticleLikeClient<$Result.GetResult<Prisma.$ArticleLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeCountArgs} args - Arguments to filter ArticleLikes to count.
     * @example
     * // Count the number of ArticleLikes
     * const count = await prisma.articleLike.count({
     *   where: {
     *     // ... the filter for the ArticleLikes we want to count
     *   }
     * })
    **/
    count<T extends ArticleLikeCountArgs>(
      args?: Subset<T, ArticleLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleLikeAggregateArgs>(args: Subset<T, ArticleLikeAggregateArgs>): Prisma.PrismaPromise<GetArticleLikeAggregateType<T>>

    /**
     * Group by ArticleLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleLikeGroupByArgs} args - Group by arguments.
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
      T extends ArticleLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleLikeGroupByArgs['orderBy'] }
        : { orderBy?: ArticleLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleLike model
   */
  readonly fields: ArticleLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArticleLike model
   */
  interface ArticleLikeFieldRefs {
    readonly id: FieldRef<"ArticleLike", 'String'>
    readonly userId: FieldRef<"ArticleLike", 'String'>
    readonly articleId: FieldRef<"ArticleLike", 'String'>
    readonly createdAt: FieldRef<"ArticleLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleLike findUnique
   */
  export type ArticleLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike findUniqueOrThrow
   */
  export type ArticleLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike findFirst
   */
  export type ArticleLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleLikes.
     */
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike findFirstOrThrow
   */
  export type ArticleLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLike to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleLikes.
     */
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike findMany
   */
  export type ArticleLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter, which ArticleLikes to fetch.
     */
    where?: ArticleLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleLikes to fetch.
     */
    orderBy?: ArticleLikeOrderByWithRelationInput | ArticleLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleLikes.
     */
    cursor?: ArticleLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleLikes.
     */
    skip?: number
    distinct?: ArticleLikeScalarFieldEnum | ArticleLikeScalarFieldEnum[]
  }

  /**
   * ArticleLike create
   */
  export type ArticleLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleLike.
     */
    data: XOR<ArticleLikeCreateInput, ArticleLikeUncheckedCreateInput>
  }

  /**
   * ArticleLike createMany
   */
  export type ArticleLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleLikes.
     */
    data: ArticleLikeCreateManyInput | ArticleLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleLike createManyAndReturn
   */
  export type ArticleLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleLikes.
     */
    data: ArticleLikeCreateManyInput | ArticleLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleLike update
   */
  export type ArticleLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleLike.
     */
    data: XOR<ArticleLikeUpdateInput, ArticleLikeUncheckedUpdateInput>
    /**
     * Choose, which ArticleLike to update.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike updateMany
   */
  export type ArticleLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleLikes.
     */
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyInput>
    /**
     * Filter which ArticleLikes to update
     */
    where?: ArticleLikeWhereInput
    /**
     * Limit how many ArticleLikes to update.
     */
    limit?: number
  }

  /**
   * ArticleLike updateManyAndReturn
   */
  export type ArticleLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * The data used to update ArticleLikes.
     */
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyInput>
    /**
     * Filter which ArticleLikes to update
     */
    where?: ArticleLikeWhereInput
    /**
     * Limit how many ArticleLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleLike upsert
   */
  export type ArticleLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleLike to update in case it exists.
     */
    where: ArticleLikeWhereUniqueInput
    /**
     * In case the ArticleLike found by the `where` argument doesn't exist, create a new ArticleLike with this data.
     */
    create: XOR<ArticleLikeCreateInput, ArticleLikeUncheckedCreateInput>
    /**
     * In case the ArticleLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleLikeUpdateInput, ArticleLikeUncheckedUpdateInput>
  }

  /**
   * ArticleLike delete
   */
  export type ArticleLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
    /**
     * Filter which ArticleLike to delete.
     */
    where: ArticleLikeWhereUniqueInput
  }

  /**
   * ArticleLike deleteMany
   */
  export type ArticleLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleLikes to delete
     */
    where?: ArticleLikeWhereInput
    /**
     * Limit how many ArticleLikes to delete.
     */
    limit?: number
  }

  /**
   * ArticleLike without action
   */
  export type ArticleLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleLike
     */
    select?: ArticleLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleLike
     */
    omit?: ArticleLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleLikeInclude<ExtArgs> | null
  }


  /**
   * Model PointAction
   */

  export type AggregatePointAction = {
    _count: PointActionCountAggregateOutputType | null
    _avg: PointActionAvgAggregateOutputType | null
    _sum: PointActionSumAggregateOutputType | null
    _min: PointActionMinAggregateOutputType | null
    _max: PointActionMaxAggregateOutputType | null
  }

  export type PointActionAvgAggregateOutputType = {
    points: number | null
  }

  export type PointActionSumAggregateOutputType = {
    points: number | null
  }

  export type PointActionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.PointActionType | null
    points: number | null
    createdAt: Date | null
  }

  export type PointActionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.PointActionType | null
    points: number | null
    createdAt: Date | null
  }

  export type PointActionCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    points: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type PointActionAvgAggregateInputType = {
    points?: true
  }

  export type PointActionSumAggregateInputType = {
    points?: true
  }

  export type PointActionMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    createdAt?: true
  }

  export type PointActionMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    createdAt?: true
  }

  export type PointActionCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    points?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type PointActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointAction to aggregate.
     */
    where?: PointActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointActions to fetch.
     */
    orderBy?: PointActionOrderByWithRelationInput | PointActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointActions
    **/
    _count?: true | PointActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointActionMaxAggregateInputType
  }

  export type GetPointActionAggregateType<T extends PointActionAggregateArgs> = {
        [P in keyof T & keyof AggregatePointAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointAction[P]>
      : GetScalarType<T[P], AggregatePointAction[P]>
  }




  export type PointActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointActionWhereInput
    orderBy?: PointActionOrderByWithAggregationInput | PointActionOrderByWithAggregationInput[]
    by: PointActionScalarFieldEnum[] | PointActionScalarFieldEnum
    having?: PointActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointActionCountAggregateInputType | true
    _avg?: PointActionAvgAggregateInputType
    _sum?: PointActionSumAggregateInputType
    _min?: PointActionMinAggregateInputType
    _max?: PointActionMaxAggregateInputType
  }

  export type PointActionGroupByOutputType = {
    id: string
    userId: string
    action: $Enums.PointActionType
    points: number
    metadata: JsonValue | null
    createdAt: Date
    _count: PointActionCountAggregateOutputType | null
    _avg: PointActionAvgAggregateOutputType | null
    _sum: PointActionSumAggregateOutputType | null
    _min: PointActionMinAggregateOutputType | null
    _max: PointActionMaxAggregateOutputType | null
  }

  type GetPointActionGroupByPayload<T extends PointActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointActionGroupByOutputType[P]>
            : GetScalarType<T[P], PointActionGroupByOutputType[P]>
        }
      >
    >


  export type PointActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAction"]>

  export type PointActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAction"]>

  export type PointActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAction"]>

  export type PointActionSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    points?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type PointActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "points" | "metadata" | "createdAt", ExtArgs["result"]["pointAction"]>
  export type PointActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointAction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: $Enums.PointActionType
      points: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["pointAction"]>
    composites: {}
  }

  type PointActionGetPayload<S extends boolean | null | undefined | PointActionDefaultArgs> = $Result.GetResult<Prisma.$PointActionPayload, S>

  type PointActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointActionCountAggregateInputType | true
    }

  export interface PointActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointAction'], meta: { name: 'PointAction' } }
    /**
     * Find zero or one PointAction that matches the filter.
     * @param {PointActionFindUniqueArgs} args - Arguments to find a PointAction
     * @example
     * // Get one PointAction
     * const pointAction = await prisma.pointAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointActionFindUniqueArgs>(args: SelectSubset<T, PointActionFindUniqueArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointActionFindUniqueOrThrowArgs} args - Arguments to find a PointAction
     * @example
     * // Get one PointAction
     * const pointAction = await prisma.pointAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointActionFindUniqueOrThrowArgs>(args: SelectSubset<T, PointActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionFindFirstArgs} args - Arguments to find a PointAction
     * @example
     * // Get one PointAction
     * const pointAction = await prisma.pointAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointActionFindFirstArgs>(args?: SelectSubset<T, PointActionFindFirstArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionFindFirstOrThrowArgs} args - Arguments to find a PointAction
     * @example
     * // Get one PointAction
     * const pointAction = await prisma.pointAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointActionFindFirstOrThrowArgs>(args?: SelectSubset<T, PointActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointActions
     * const pointActions = await prisma.pointAction.findMany()
     * 
     * // Get first 10 PointActions
     * const pointActions = await prisma.pointAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointActionWithIdOnly = await prisma.pointAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointActionFindManyArgs>(args?: SelectSubset<T, PointActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointAction.
     * @param {PointActionCreateArgs} args - Arguments to create a PointAction.
     * @example
     * // Create one PointAction
     * const PointAction = await prisma.pointAction.create({
     *   data: {
     *     // ... data to create a PointAction
     *   }
     * })
     * 
     */
    create<T extends PointActionCreateArgs>(args: SelectSubset<T, PointActionCreateArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointActions.
     * @param {PointActionCreateManyArgs} args - Arguments to create many PointActions.
     * @example
     * // Create many PointActions
     * const pointAction = await prisma.pointAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointActionCreateManyArgs>(args?: SelectSubset<T, PointActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointActions and returns the data saved in the database.
     * @param {PointActionCreateManyAndReturnArgs} args - Arguments to create many PointActions.
     * @example
     * // Create many PointActions
     * const pointAction = await prisma.pointAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointActions and only return the `id`
     * const pointActionWithIdOnly = await prisma.pointAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointActionCreateManyAndReturnArgs>(args?: SelectSubset<T, PointActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointAction.
     * @param {PointActionDeleteArgs} args - Arguments to delete one PointAction.
     * @example
     * // Delete one PointAction
     * const PointAction = await prisma.pointAction.delete({
     *   where: {
     *     // ... filter to delete one PointAction
     *   }
     * })
     * 
     */
    delete<T extends PointActionDeleteArgs>(args: SelectSubset<T, PointActionDeleteArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointAction.
     * @param {PointActionUpdateArgs} args - Arguments to update one PointAction.
     * @example
     * // Update one PointAction
     * const pointAction = await prisma.pointAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointActionUpdateArgs>(args: SelectSubset<T, PointActionUpdateArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointActions.
     * @param {PointActionDeleteManyArgs} args - Arguments to filter PointActions to delete.
     * @example
     * // Delete a few PointActions
     * const { count } = await prisma.pointAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointActionDeleteManyArgs>(args?: SelectSubset<T, PointActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointActions
     * const pointAction = await prisma.pointAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointActionUpdateManyArgs>(args: SelectSubset<T, PointActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointActions and returns the data updated in the database.
     * @param {PointActionUpdateManyAndReturnArgs} args - Arguments to update many PointActions.
     * @example
     * // Update many PointActions
     * const pointAction = await prisma.pointAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointActions and only return the `id`
     * const pointActionWithIdOnly = await prisma.pointAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointActionUpdateManyAndReturnArgs>(args: SelectSubset<T, PointActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointAction.
     * @param {PointActionUpsertArgs} args - Arguments to update or create a PointAction.
     * @example
     * // Update or create a PointAction
     * const pointAction = await prisma.pointAction.upsert({
     *   create: {
     *     // ... data to create a PointAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointAction we want to update
     *   }
     * })
     */
    upsert<T extends PointActionUpsertArgs>(args: SelectSubset<T, PointActionUpsertArgs<ExtArgs>>): Prisma__PointActionClient<$Result.GetResult<Prisma.$PointActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionCountArgs} args - Arguments to filter PointActions to count.
     * @example
     * // Count the number of PointActions
     * const count = await prisma.pointAction.count({
     *   where: {
     *     // ... the filter for the PointActions we want to count
     *   }
     * })
    **/
    count<T extends PointActionCountArgs>(
      args?: Subset<T, PointActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointActionAggregateArgs>(args: Subset<T, PointActionAggregateArgs>): Prisma.PrismaPromise<GetPointActionAggregateType<T>>

    /**
     * Group by PointAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointActionGroupByArgs} args - Group by arguments.
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
      T extends PointActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointActionGroupByArgs['orderBy'] }
        : { orderBy?: PointActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointAction model
   */
  readonly fields: PointActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointAction model
   */
  interface PointActionFieldRefs {
    readonly id: FieldRef<"PointAction", 'String'>
    readonly userId: FieldRef<"PointAction", 'String'>
    readonly action: FieldRef<"PointAction", 'PointActionType'>
    readonly points: FieldRef<"PointAction", 'Int'>
    readonly metadata: FieldRef<"PointAction", 'Json'>
    readonly createdAt: FieldRef<"PointAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointAction findUnique
   */
  export type PointActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter, which PointAction to fetch.
     */
    where: PointActionWhereUniqueInput
  }

  /**
   * PointAction findUniqueOrThrow
   */
  export type PointActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter, which PointAction to fetch.
     */
    where: PointActionWhereUniqueInput
  }

  /**
   * PointAction findFirst
   */
  export type PointActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter, which PointAction to fetch.
     */
    where?: PointActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointActions to fetch.
     */
    orderBy?: PointActionOrderByWithRelationInput | PointActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointActions.
     */
    cursor?: PointActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointActions.
     */
    distinct?: PointActionScalarFieldEnum | PointActionScalarFieldEnum[]
  }

  /**
   * PointAction findFirstOrThrow
   */
  export type PointActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter, which PointAction to fetch.
     */
    where?: PointActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointActions to fetch.
     */
    orderBy?: PointActionOrderByWithRelationInput | PointActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointActions.
     */
    cursor?: PointActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointActions.
     */
    distinct?: PointActionScalarFieldEnum | PointActionScalarFieldEnum[]
  }

  /**
   * PointAction findMany
   */
  export type PointActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter, which PointActions to fetch.
     */
    where?: PointActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointActions to fetch.
     */
    orderBy?: PointActionOrderByWithRelationInput | PointActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointActions.
     */
    cursor?: PointActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointActions.
     */
    skip?: number
    distinct?: PointActionScalarFieldEnum | PointActionScalarFieldEnum[]
  }

  /**
   * PointAction create
   */
  export type PointActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * The data needed to create a PointAction.
     */
    data: XOR<PointActionCreateInput, PointActionUncheckedCreateInput>
  }

  /**
   * PointAction createMany
   */
  export type PointActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointActions.
     */
    data: PointActionCreateManyInput | PointActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointAction createManyAndReturn
   */
  export type PointActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * The data used to create many PointActions.
     */
    data: PointActionCreateManyInput | PointActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointAction update
   */
  export type PointActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * The data needed to update a PointAction.
     */
    data: XOR<PointActionUpdateInput, PointActionUncheckedUpdateInput>
    /**
     * Choose, which PointAction to update.
     */
    where: PointActionWhereUniqueInput
  }

  /**
   * PointAction updateMany
   */
  export type PointActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointActions.
     */
    data: XOR<PointActionUpdateManyMutationInput, PointActionUncheckedUpdateManyInput>
    /**
     * Filter which PointActions to update
     */
    where?: PointActionWhereInput
    /**
     * Limit how many PointActions to update.
     */
    limit?: number
  }

  /**
   * PointAction updateManyAndReturn
   */
  export type PointActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * The data used to update PointActions.
     */
    data: XOR<PointActionUpdateManyMutationInput, PointActionUncheckedUpdateManyInput>
    /**
     * Filter which PointActions to update
     */
    where?: PointActionWhereInput
    /**
     * Limit how many PointActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointAction upsert
   */
  export type PointActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * The filter to search for the PointAction to update in case it exists.
     */
    where: PointActionWhereUniqueInput
    /**
     * In case the PointAction found by the `where` argument doesn't exist, create a new PointAction with this data.
     */
    create: XOR<PointActionCreateInput, PointActionUncheckedCreateInput>
    /**
     * In case the PointAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointActionUpdateInput, PointActionUncheckedUpdateInput>
  }

  /**
   * PointAction delete
   */
  export type PointActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
    /**
     * Filter which PointAction to delete.
     */
    where: PointActionWhereUniqueInput
  }

  /**
   * PointAction deleteMany
   */
  export type PointActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointActions to delete
     */
    where?: PointActionWhereInput
    /**
     * Limit how many PointActions to delete.
     */
    limit?: number
  }

  /**
   * PointAction without action
   */
  export type PointActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAction
     */
    select?: PointActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAction
     */
    omit?: PointActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointActionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    imageUrl: 'imageUrl',
    bio: 'bio',
    role: 'role',
    techStack: 'techStack',
    points: 'points',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LobbyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topic: 'topic',
    status: 'status',
    ownerId: 'ownerId',
    maxParticipants: 'maxParticipants',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LobbyScalarFieldEnum = (typeof LobbyScalarFieldEnum)[keyof typeof LobbyScalarFieldEnum]


  export const LobbyParticipantScalarFieldEnum: {
    lobbyId: 'lobbyId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type LobbyParticipantScalarFieldEnum = (typeof LobbyParticipantScalarFieldEnum)[keyof typeof LobbyParticipantScalarFieldEnum]


  export const MemeScalarFieldEnum: {
    id: 'id',
    caption: 'caption',
    imageUrl: 'imageUrl',
    likes: 'likes',
    authorId: 'authorId',
    createdAt: 'createdAt'
  };

  export type MemeScalarFieldEnum = (typeof MemeScalarFieldEnum)[keyof typeof MemeScalarFieldEnum]


  export const PodcastScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    audioUrl: 'audioUrl',
    duration: 'duration',
    hostId: 'hostId',
    createdAt: 'createdAt'
  };

  export type PodcastScalarFieldEnum = (typeof PodcastScalarFieldEnum)[keyof typeof PodcastScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    scheduledFor: 'scheduledFor',
    organizerId: 'organizerId',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    summary: 'summary',
    authorId: 'authorId',
    readCount: 'readCount',
    likesCount: 'likesCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleReadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    readAt: 'readAt'
  };

  export type ArticleReadScalarFieldEnum = (typeof ArticleReadScalarFieldEnum)[keyof typeof ArticleReadScalarFieldEnum]


  export const ArticleLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    articleId: 'articleId',
    createdAt: 'createdAt'
  };

  export type ArticleLikeScalarFieldEnum = (typeof ArticleLikeScalarFieldEnum)[keyof typeof ArticleLikeScalarFieldEnum]


  export const PointActionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    points: 'points',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type PointActionScalarFieldEnum = (typeof PointActionScalarFieldEnum)[keyof typeof PointActionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LobbyStatus'
   */
  export type EnumLobbyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LobbyStatus'>
    


  /**
   * Reference to a field of type 'LobbyStatus[]'
   */
  export type ListEnumLobbyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LobbyStatus[]'>
    


  /**
   * Reference to a field of type 'ParticipantRole'
   */
  export type EnumParticipantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantRole'>
    


  /**
   * Reference to a field of type 'ParticipantRole[]'
   */
  export type ListEnumParticipantRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantRole[]'>
    


  /**
   * Reference to a field of type 'PointActionType'
   */
  export type EnumPointActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointActionType'>
    


  /**
   * Reference to a field of type 'PointActionType[]'
   */
  export type ListEnumPointActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointActionType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    techStack?: JsonNullableFilter<"User">
    points?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lobbiesHosted?: LobbyListRelationFilter
    lobbyParticipation?: LobbyParticipantListRelationFilter
    podcasts?: PodcastListRelationFilter
    memes?: MemeListRelationFilter
    eventsOrganized?: EventListRelationFilter
    articles?: ArticleListRelationFilter
    articleReads?: ArticleReadListRelationFilter
    likes?: ArticleLikeListRelationFilter
    pointActions?: PointActionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    techStack?: SortOrderInput | SortOrder
    points?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lobbiesHosted?: LobbyOrderByRelationAggregateInput
    lobbyParticipation?: LobbyParticipantOrderByRelationAggregateInput
    podcasts?: PodcastOrderByRelationAggregateInput
    memes?: MemeOrderByRelationAggregateInput
    eventsOrganized?: EventOrderByRelationAggregateInput
    articles?: ArticleOrderByRelationAggregateInput
    articleReads?: ArticleReadOrderByRelationAggregateInput
    likes?: ArticleLikeOrderByRelationAggregateInput
    pointActions?: PointActionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    techStack?: JsonNullableFilter<"User">
    points?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lobbiesHosted?: LobbyListRelationFilter
    lobbyParticipation?: LobbyParticipantListRelationFilter
    podcasts?: PodcastListRelationFilter
    memes?: MemeListRelationFilter
    eventsOrganized?: EventListRelationFilter
    articles?: ArticleListRelationFilter
    articleReads?: ArticleReadListRelationFilter
    likes?: ArticleLikeListRelationFilter
    pointActions?: PointActionListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    techStack?: SortOrderInput | SortOrder
    points?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    techStack?: JsonNullableWithAggregatesFilter<"User">
    points?: IntWithAggregatesFilter<"User"> | number
    lastLoginAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LobbyWhereInput = {
    AND?: LobbyWhereInput | LobbyWhereInput[]
    OR?: LobbyWhereInput[]
    NOT?: LobbyWhereInput | LobbyWhereInput[]
    id?: StringFilter<"Lobby"> | string
    title?: StringFilter<"Lobby"> | string
    topic?: StringFilter<"Lobby"> | string
    status?: EnumLobbyStatusFilter<"Lobby"> | $Enums.LobbyStatus
    ownerId?: StringFilter<"Lobby"> | string
    maxParticipants?: IntFilter<"Lobby"> | number
    startedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    createdAt?: DateTimeFilter<"Lobby"> | Date | string
    updatedAt?: DateTimeFilter<"Lobby"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: LobbyParticipantListRelationFilter
  }

  export type LobbyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    maxParticipants?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    participants?: LobbyParticipantOrderByRelationAggregateInput
  }

  export type LobbyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LobbyWhereInput | LobbyWhereInput[]
    OR?: LobbyWhereInput[]
    NOT?: LobbyWhereInput | LobbyWhereInput[]
    title?: StringFilter<"Lobby"> | string
    topic?: StringFilter<"Lobby"> | string
    status?: EnumLobbyStatusFilter<"Lobby"> | $Enums.LobbyStatus
    ownerId?: StringFilter<"Lobby"> | string
    maxParticipants?: IntFilter<"Lobby"> | number
    startedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    createdAt?: DateTimeFilter<"Lobby"> | Date | string
    updatedAt?: DateTimeFilter<"Lobby"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: LobbyParticipantListRelationFilter
  }, "id">

  export type LobbyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    maxParticipants?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LobbyCountOrderByAggregateInput
    _avg?: LobbyAvgOrderByAggregateInput
    _max?: LobbyMaxOrderByAggregateInput
    _min?: LobbyMinOrderByAggregateInput
    _sum?: LobbySumOrderByAggregateInput
  }

  export type LobbyScalarWhereWithAggregatesInput = {
    AND?: LobbyScalarWhereWithAggregatesInput | LobbyScalarWhereWithAggregatesInput[]
    OR?: LobbyScalarWhereWithAggregatesInput[]
    NOT?: LobbyScalarWhereWithAggregatesInput | LobbyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lobby"> | string
    title?: StringWithAggregatesFilter<"Lobby"> | string
    topic?: StringWithAggregatesFilter<"Lobby"> | string
    status?: EnumLobbyStatusWithAggregatesFilter<"Lobby"> | $Enums.LobbyStatus
    ownerId?: StringWithAggregatesFilter<"Lobby"> | string
    maxParticipants?: IntWithAggregatesFilter<"Lobby"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"Lobby"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Lobby"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lobby"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lobby"> | Date | string
  }

  export type LobbyParticipantWhereInput = {
    AND?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    OR?: LobbyParticipantWhereInput[]
    NOT?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    lobbyId?: StringFilter<"LobbyParticipant"> | string
    userId?: StringFilter<"LobbyParticipant"> | string
    role?: EnumParticipantRoleFilter<"LobbyParticipant"> | $Enums.ParticipantRole
    joinedAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
    lobby?: XOR<LobbyScalarRelationFilter, LobbyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LobbyParticipantOrderByWithRelationInput = {
    lobbyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    lobby?: LobbyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LobbyParticipantWhereUniqueInput = Prisma.AtLeast<{
    lobbyId_userId?: LobbyParticipantLobbyIdUserIdCompoundUniqueInput
    AND?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    OR?: LobbyParticipantWhereInput[]
    NOT?: LobbyParticipantWhereInput | LobbyParticipantWhereInput[]
    lobbyId?: StringFilter<"LobbyParticipant"> | string
    userId?: StringFilter<"LobbyParticipant"> | string
    role?: EnumParticipantRoleFilter<"LobbyParticipant"> | $Enums.ParticipantRole
    joinedAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
    lobby?: XOR<LobbyScalarRelationFilter, LobbyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "lobbyId_userId">

  export type LobbyParticipantOrderByWithAggregationInput = {
    lobbyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: LobbyParticipantCountOrderByAggregateInput
    _max?: LobbyParticipantMaxOrderByAggregateInput
    _min?: LobbyParticipantMinOrderByAggregateInput
  }

  export type LobbyParticipantScalarWhereWithAggregatesInput = {
    AND?: LobbyParticipantScalarWhereWithAggregatesInput | LobbyParticipantScalarWhereWithAggregatesInput[]
    OR?: LobbyParticipantScalarWhereWithAggregatesInput[]
    NOT?: LobbyParticipantScalarWhereWithAggregatesInput | LobbyParticipantScalarWhereWithAggregatesInput[]
    lobbyId?: StringWithAggregatesFilter<"LobbyParticipant"> | string
    userId?: StringWithAggregatesFilter<"LobbyParticipant"> | string
    role?: EnumParticipantRoleWithAggregatesFilter<"LobbyParticipant"> | $Enums.ParticipantRole
    joinedAt?: DateTimeWithAggregatesFilter<"LobbyParticipant"> | Date | string
  }

  export type MemeWhereInput = {
    AND?: MemeWhereInput | MemeWhereInput[]
    OR?: MemeWhereInput[]
    NOT?: MemeWhereInput | MemeWhereInput[]
    id?: StringFilter<"Meme"> | string
    caption?: StringFilter<"Meme"> | string
    imageUrl?: StringFilter<"Meme"> | string
    likes?: IntFilter<"Meme"> | number
    authorId?: StringFilter<"Meme"> | string
    createdAt?: DateTimeFilter<"Meme"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MemeOrderByWithRelationInput = {
    id?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type MemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemeWhereInput | MemeWhereInput[]
    OR?: MemeWhereInput[]
    NOT?: MemeWhereInput | MemeWhereInput[]
    caption?: StringFilter<"Meme"> | string
    imageUrl?: StringFilter<"Meme"> | string
    likes?: IntFilter<"Meme"> | number
    authorId?: StringFilter<"Meme"> | string
    createdAt?: DateTimeFilter<"Meme"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MemeOrderByWithAggregationInput = {
    id?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    _count?: MemeCountOrderByAggregateInput
    _avg?: MemeAvgOrderByAggregateInput
    _max?: MemeMaxOrderByAggregateInput
    _min?: MemeMinOrderByAggregateInput
    _sum?: MemeSumOrderByAggregateInput
  }

  export type MemeScalarWhereWithAggregatesInput = {
    AND?: MemeScalarWhereWithAggregatesInput | MemeScalarWhereWithAggregatesInput[]
    OR?: MemeScalarWhereWithAggregatesInput[]
    NOT?: MemeScalarWhereWithAggregatesInput | MemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meme"> | string
    caption?: StringWithAggregatesFilter<"Meme"> | string
    imageUrl?: StringWithAggregatesFilter<"Meme"> | string
    likes?: IntWithAggregatesFilter<"Meme"> | number
    authorId?: StringWithAggregatesFilter<"Meme"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meme"> | Date | string
  }

  export type PodcastWhereInput = {
    AND?: PodcastWhereInput | PodcastWhereInput[]
    OR?: PodcastWhereInput[]
    NOT?: PodcastWhereInput | PodcastWhereInput[]
    id?: StringFilter<"Podcast"> | string
    title?: StringFilter<"Podcast"> | string
    description?: StringNullableFilter<"Podcast"> | string | null
    audioUrl?: StringFilter<"Podcast"> | string
    duration?: IntNullableFilter<"Podcast"> | number | null
    hostId?: StringFilter<"Podcast"> | string
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PodcastOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    audioUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    host?: UserOrderByWithRelationInput
  }

  export type PodcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PodcastWhereInput | PodcastWhereInput[]
    OR?: PodcastWhereInput[]
    NOT?: PodcastWhereInput | PodcastWhereInput[]
    title?: StringFilter<"Podcast"> | string
    description?: StringNullableFilter<"Podcast"> | string | null
    audioUrl?: StringFilter<"Podcast"> | string
    duration?: IntNullableFilter<"Podcast"> | number | null
    hostId?: StringFilter<"Podcast"> | string
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PodcastOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    audioUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
    _count?: PodcastCountOrderByAggregateInput
    _avg?: PodcastAvgOrderByAggregateInput
    _max?: PodcastMaxOrderByAggregateInput
    _min?: PodcastMinOrderByAggregateInput
    _sum?: PodcastSumOrderByAggregateInput
  }

  export type PodcastScalarWhereWithAggregatesInput = {
    AND?: PodcastScalarWhereWithAggregatesInput | PodcastScalarWhereWithAggregatesInput[]
    OR?: PodcastScalarWhereWithAggregatesInput[]
    NOT?: PodcastScalarWhereWithAggregatesInput | PodcastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Podcast"> | string
    title?: StringWithAggregatesFilter<"Podcast"> | string
    description?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    audioUrl?: StringWithAggregatesFilter<"Podcast"> | string
    duration?: IntNullableWithAggregatesFilter<"Podcast"> | number | null
    hostId?: StringWithAggregatesFilter<"Podcast"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Podcast"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    scheduledFor?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    scheduledFor?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    scheduledFor?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    summary?: StringNullableFilter<"Article"> | string | null
    authorId?: StringFilter<"Article"> | string
    readCount?: IntFilter<"Article"> | number
    likesCount?: IntFilter<"Article"> | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    readers?: ArticleReadListRelationFilter
    likes?: ArticleLikeListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    authorId?: SortOrder
    readCount?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    readers?: ArticleReadOrderByRelationAggregateInput
    likes?: ArticleLikeOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    summary?: StringNullableFilter<"Article"> | string | null
    authorId?: StringFilter<"Article"> | string
    readCount?: IntFilter<"Article"> | number
    likesCount?: IntFilter<"Article"> | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    readers?: ArticleReadListRelationFilter
    likes?: ArticleLikeListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrderInput | SortOrder
    authorId?: SortOrder
    readCount?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    content?: StringWithAggregatesFilter<"Article"> | string
    summary?: StringNullableWithAggregatesFilter<"Article"> | string | null
    authorId?: StringWithAggregatesFilter<"Article"> | string
    readCount?: IntWithAggregatesFilter<"Article"> | number
    likesCount?: IntWithAggregatesFilter<"Article"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ArticleReadWhereInput = {
    AND?: ArticleReadWhereInput | ArticleReadWhereInput[]
    OR?: ArticleReadWhereInput[]
    NOT?: ArticleReadWhereInput | ArticleReadWhereInput[]
    id?: StringFilter<"ArticleRead"> | string
    userId?: StringFilter<"ArticleRead"> | string
    articleId?: StringFilter<"ArticleRead"> | string
    readAt?: DateTimeFilter<"ArticleRead"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type ArticleReadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    readAt?: SortOrder
    user?: UserOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
  }

  export type ArticleReadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleId?: ArticleReadUserIdArticleIdCompoundUniqueInput
    AND?: ArticleReadWhereInput | ArticleReadWhereInput[]
    OR?: ArticleReadWhereInput[]
    NOT?: ArticleReadWhereInput | ArticleReadWhereInput[]
    userId?: StringFilter<"ArticleRead"> | string
    articleId?: StringFilter<"ArticleRead"> | string
    readAt?: DateTimeFilter<"ArticleRead"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id" | "userId_articleId">

  export type ArticleReadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    readAt?: SortOrder
    _count?: ArticleReadCountOrderByAggregateInput
    _max?: ArticleReadMaxOrderByAggregateInput
    _min?: ArticleReadMinOrderByAggregateInput
  }

  export type ArticleReadScalarWhereWithAggregatesInput = {
    AND?: ArticleReadScalarWhereWithAggregatesInput | ArticleReadScalarWhereWithAggregatesInput[]
    OR?: ArticleReadScalarWhereWithAggregatesInput[]
    NOT?: ArticleReadScalarWhereWithAggregatesInput | ArticleReadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleRead"> | string
    userId?: StringWithAggregatesFilter<"ArticleRead"> | string
    articleId?: StringWithAggregatesFilter<"ArticleRead"> | string
    readAt?: DateTimeWithAggregatesFilter<"ArticleRead"> | Date | string
  }

  export type ArticleLikeWhereInput = {
    AND?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    OR?: ArticleLikeWhereInput[]
    NOT?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    id?: StringFilter<"ArticleLike"> | string
    userId?: StringFilter<"ArticleLike"> | string
    articleId?: StringFilter<"ArticleLike"> | string
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }

  export type ArticleLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    article?: ArticleOrderByWithRelationInput
  }

  export type ArticleLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_articleId?: ArticleLikeUserIdArticleIdCompoundUniqueInput
    AND?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    OR?: ArticleLikeWhereInput[]
    NOT?: ArticleLikeWhereInput | ArticleLikeWhereInput[]
    userId?: StringFilter<"ArticleLike"> | string
    articleId?: StringFilter<"ArticleLike"> | string
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
  }, "id" | "userId_articleId">

  export type ArticleLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    _count?: ArticleLikeCountOrderByAggregateInput
    _max?: ArticleLikeMaxOrderByAggregateInput
    _min?: ArticleLikeMinOrderByAggregateInput
  }

  export type ArticleLikeScalarWhereWithAggregatesInput = {
    AND?: ArticleLikeScalarWhereWithAggregatesInput | ArticleLikeScalarWhereWithAggregatesInput[]
    OR?: ArticleLikeScalarWhereWithAggregatesInput[]
    NOT?: ArticleLikeScalarWhereWithAggregatesInput | ArticleLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleLike"> | string
    userId?: StringWithAggregatesFilter<"ArticleLike"> | string
    articleId?: StringWithAggregatesFilter<"ArticleLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleLike"> | Date | string
  }

  export type PointActionWhereInput = {
    AND?: PointActionWhereInput | PointActionWhereInput[]
    OR?: PointActionWhereInput[]
    NOT?: PointActionWhereInput | PointActionWhereInput[]
    id?: StringFilter<"PointAction"> | string
    userId?: StringFilter<"PointAction"> | string
    action?: EnumPointActionTypeFilter<"PointAction"> | $Enums.PointActionType
    points?: IntFilter<"PointAction"> | number
    metadata?: JsonNullableFilter<"PointAction">
    createdAt?: DateTimeFilter<"PointAction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointActionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointActionWhereInput | PointActionWhereInput[]
    OR?: PointActionWhereInput[]
    NOT?: PointActionWhereInput | PointActionWhereInput[]
    userId?: StringFilter<"PointAction"> | string
    action?: EnumPointActionTypeFilter<"PointAction"> | $Enums.PointActionType
    points?: IntFilter<"PointAction"> | number
    metadata?: JsonNullableFilter<"PointAction">
    createdAt?: DateTimeFilter<"PointAction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointActionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PointActionCountOrderByAggregateInput
    _avg?: PointActionAvgOrderByAggregateInput
    _max?: PointActionMaxOrderByAggregateInput
    _min?: PointActionMinOrderByAggregateInput
    _sum?: PointActionSumOrderByAggregateInput
  }

  export type PointActionScalarWhereWithAggregatesInput = {
    AND?: PointActionScalarWhereWithAggregatesInput | PointActionScalarWhereWithAggregatesInput[]
    OR?: PointActionScalarWhereWithAggregatesInput[]
    NOT?: PointActionScalarWhereWithAggregatesInput | PointActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointAction"> | string
    userId?: StringWithAggregatesFilter<"PointAction"> | string
    action?: EnumPointActionTypeWithAggregatesFilter<"PointAction"> | $Enums.PointActionType
    points?: IntWithAggregatesFilter<"PointAction"> | number
    metadata?: JsonNullableWithAggregatesFilter<"PointAction">
    createdAt?: DateTimeWithAggregatesFilter<"PointAction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyCreateInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutLobbiesHostedInput
    participants?: LobbyParticipantCreateNestedManyWithoutLobbyInput
  }

  export type LobbyUncheckedCreateInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    ownerId: string
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: LobbyParticipantUncheckedCreateNestedManyWithoutLobbyInput
  }

  export type LobbyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLobbiesHostedNestedInput
    participants?: LobbyParticipantUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: LobbyParticipantUncheckedUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyCreateManyInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    ownerId: string
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LobbyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantCreateInput = {
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
    lobby: LobbyCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutLobbyParticipationInput
  }

  export type LobbyParticipantUncheckedCreateInput = {
    lobbyId: string
    userId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type LobbyParticipantUpdateInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby?: LobbyUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutLobbyParticipationNestedInput
  }

  export type LobbyParticipantUncheckedUpdateInput = {
    lobbyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantCreateManyInput = {
    lobbyId: string
    userId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type LobbyParticipantUpdateManyMutationInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantUncheckedUpdateManyInput = {
    lobbyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeCreateInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutMemesInput
  }

  export type MemeUncheckedCreateInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    authorId: string
    createdAt?: Date | string
  }

  export type MemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutMemesNestedInput
  }

  export type MemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeCreateManyInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    authorId: string
    createdAt?: Date | string
  }

  export type MemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastCreateInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    createdAt?: Date | string
    host: UserCreateNestedOneWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    hostId: string
    createdAt?: Date | string
  }

  export type PodcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    hostId: string
    createdAt?: Date | string
  }

  export type PodcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    hostId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsOrganizedInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    organizerId: string
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsOrganizedNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    organizerId: string
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    readers?: ArticleReadCreateNestedManyWithoutArticleInput
    likes?: ArticleLikeCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    authorId: string
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    readers?: ArticleReadUncheckedCreateNestedManyWithoutArticleInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    readers?: ArticleReadUpdateManyWithoutArticleNestedInput
    likes?: ArticleLikeUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readers?: ArticleReadUncheckedUpdateManyWithoutArticleNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    authorId: string
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadCreateInput = {
    id?: string
    readAt?: Date | string
    user: UserCreateNestedOneWithoutArticleReadsInput
    article: ArticleCreateNestedOneWithoutReadersInput
  }

  export type ArticleReadUncheckedCreateInput = {
    id?: string
    userId: string
    articleId: string
    readAt?: Date | string
  }

  export type ArticleReadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleReadsNestedInput
    article?: ArticleUpdateOneRequiredWithoutReadersNestedInput
  }

  export type ArticleReadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadCreateManyInput = {
    id?: string
    userId: string
    articleId: string
    readAt?: Date | string
  }

  export type ArticleReadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    article: ArticleCreateNestedOneWithoutLikesInput
  }

  export type ArticleLikeUncheckedCreateInput = {
    id?: string
    userId: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    article?: ArticleUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ArticleLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeCreateManyInput = {
    id?: string
    userId: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionCreateInput = {
    id?: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointActionsInput
  }

  export type PointActionUncheckedCreateInput = {
    id?: string
    userId: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PointActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointActionsNestedInput
  }

  export type PointActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionCreateManyInput = {
    id?: string
    userId: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PointActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type LobbyListRelationFilter = {
    every?: LobbyWhereInput
    some?: LobbyWhereInput
    none?: LobbyWhereInput
  }

  export type LobbyParticipantListRelationFilter = {
    every?: LobbyParticipantWhereInput
    some?: LobbyParticipantWhereInput
    none?: LobbyParticipantWhereInput
  }

  export type PodcastListRelationFilter = {
    every?: PodcastWhereInput
    some?: PodcastWhereInput
    none?: PodcastWhereInput
  }

  export type MemeListRelationFilter = {
    every?: MemeWhereInput
    some?: MemeWhereInput
    none?: MemeWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleReadListRelationFilter = {
    every?: ArticleReadWhereInput
    some?: ArticleReadWhereInput
    none?: ArticleReadWhereInput
  }

  export type ArticleLikeListRelationFilter = {
    every?: ArticleLikeWhereInput
    some?: ArticleLikeWhereInput
    none?: ArticleLikeWhereInput
  }

  export type PointActionListRelationFilter = {
    every?: PointActionWhereInput
    some?: PointActionWhereInput
    none?: PointActionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LobbyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LobbyParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PodcastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleReadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    techStack?: SortOrder
    points?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    points?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    points?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumLobbyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LobbyStatus | EnumLobbyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLobbyStatusFilter<$PrismaModel> | $Enums.LobbyStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LobbyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    maxParticipants?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LobbyAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type LobbyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    maxParticipants?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LobbyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    ownerId?: SortOrder
    maxParticipants?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LobbySumOrderByAggregateInput = {
    maxParticipants?: SortOrder
  }

  export type EnumLobbyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LobbyStatus | EnumLobbyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLobbyStatusWithAggregatesFilter<$PrismaModel> | $Enums.LobbyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLobbyStatusFilter<$PrismaModel>
    _max?: NestedEnumLobbyStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumParticipantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleFilter<$PrismaModel> | $Enums.ParticipantRole
  }

  export type LobbyScalarRelationFilter = {
    is?: LobbyWhereInput
    isNot?: LobbyWhereInput
  }

  export type LobbyParticipantLobbyIdUserIdCompoundUniqueInput = {
    lobbyId: string
    userId: string
  }

  export type LobbyParticipantCountOrderByAggregateInput = {
    lobbyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type LobbyParticipantMaxOrderByAggregateInput = {
    lobbyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type LobbyParticipantMinOrderByAggregateInput = {
    lobbyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumParticipantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantRoleFilter<$PrismaModel>
    _max?: NestedEnumParticipantRoleFilter<$PrismaModel>
  }

  export type MemeCountOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type MemeMaxOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeMinOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemeSumOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PodcastCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
  }

  export type PodcastAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type PodcastMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
  }

  export type PodcastMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    hostId?: SortOrder
    createdAt?: SortOrder
  }

  export type PodcastSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledFor?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledFor?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledFor?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    authorId?: SortOrder
    readCount?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    readCount?: SortOrder
    likesCount?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    authorId?: SortOrder
    readCount?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    summary?: SortOrder
    authorId?: SortOrder
    readCount?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    readCount?: SortOrder
    likesCount?: SortOrder
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type ArticleReadUserIdArticleIdCompoundUniqueInput = {
    userId: string
    articleId: string
  }

  export type ArticleReadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    readAt?: SortOrder
  }

  export type ArticleReadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    readAt?: SortOrder
  }

  export type ArticleReadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    readAt?: SortOrder
  }

  export type ArticleLikeUserIdArticleIdCompoundUniqueInput = {
    userId: string
    articleId: string
  }

  export type ArticleLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPointActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointActionType | EnumPointActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionTypeFilter<$PrismaModel> | $Enums.PointActionType
  }

  export type PointActionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type PointActionAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PointActionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type PointActionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type PointActionSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type EnumPointActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointActionType | EnumPointActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointActionTypeFilter<$PrismaModel>
    _max?: NestedEnumPointActionTypeFilter<$PrismaModel>
  }

  export type LobbyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput> | LobbyCreateWithoutOwnerInput[] | LobbyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LobbyCreateOrConnectWithoutOwnerInput | LobbyCreateOrConnectWithoutOwnerInput[]
    createMany?: LobbyCreateManyOwnerInputEnvelope
    connect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
  }

  export type LobbyParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput> | LobbyParticipantCreateWithoutUserInput[] | LobbyParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutUserInput | LobbyParticipantCreateOrConnectWithoutUserInput[]
    createMany?: LobbyParticipantCreateManyUserInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type PodcastCreateNestedManyWithoutHostInput = {
    create?: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput> | PodcastCreateWithoutHostInput[] | PodcastUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutHostInput | PodcastCreateOrConnectWithoutHostInput[]
    createMany?: PodcastCreateManyHostInputEnvelope
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type MemeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput> | MemeCreateWithoutAuthorInput[] | MemeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MemeCreateOrConnectWithoutAuthorInput | MemeCreateOrConnectWithoutAuthorInput[]
    createMany?: MemeCreateManyAuthorInputEnvelope
    connect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleReadCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput> | ArticleReadCreateWithoutUserInput[] | ArticleReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutUserInput | ArticleReadCreateOrConnectWithoutUserInput[]
    createMany?: ArticleReadCreateManyUserInputEnvelope
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
  }

  export type ArticleLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type PointActionCreateNestedManyWithoutUserInput = {
    create?: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput> | PointActionCreateWithoutUserInput[] | PointActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointActionCreateOrConnectWithoutUserInput | PointActionCreateOrConnectWithoutUserInput[]
    createMany?: PointActionCreateManyUserInputEnvelope
    connect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
  }

  export type LobbyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput> | LobbyCreateWithoutOwnerInput[] | LobbyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LobbyCreateOrConnectWithoutOwnerInput | LobbyCreateOrConnectWithoutOwnerInput[]
    createMany?: LobbyCreateManyOwnerInputEnvelope
    connect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
  }

  export type LobbyParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput> | LobbyParticipantCreateWithoutUserInput[] | LobbyParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutUserInput | LobbyParticipantCreateOrConnectWithoutUserInput[]
    createMany?: LobbyParticipantCreateManyUserInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type PodcastUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput> | PodcastCreateWithoutHostInput[] | PodcastUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutHostInput | PodcastCreateOrConnectWithoutHostInput[]
    createMany?: PodcastCreateManyHostInputEnvelope
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type MemeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput> | MemeCreateWithoutAuthorInput[] | MemeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MemeCreateOrConnectWithoutAuthorInput | MemeCreateOrConnectWithoutAuthorInput[]
    createMany?: MemeCreateManyAuthorInputEnvelope
    connect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleReadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput> | ArticleReadCreateWithoutUserInput[] | ArticleReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutUserInput | ArticleReadCreateOrConnectWithoutUserInput[]
    createMany?: ArticleReadCreateManyUserInputEnvelope
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
  }

  export type ArticleLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type PointActionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput> | PointActionCreateWithoutUserInput[] | PointActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointActionCreateOrConnectWithoutUserInput | PointActionCreateOrConnectWithoutUserInput[]
    createMany?: PointActionCreateManyUserInputEnvelope
    connect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LobbyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput> | LobbyCreateWithoutOwnerInput[] | LobbyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LobbyCreateOrConnectWithoutOwnerInput | LobbyCreateOrConnectWithoutOwnerInput[]
    upsert?: LobbyUpsertWithWhereUniqueWithoutOwnerInput | LobbyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LobbyCreateManyOwnerInputEnvelope
    set?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    disconnect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    delete?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    connect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    update?: LobbyUpdateWithWhereUniqueWithoutOwnerInput | LobbyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LobbyUpdateManyWithWhereWithoutOwnerInput | LobbyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LobbyScalarWhereInput | LobbyScalarWhereInput[]
  }

  export type LobbyParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput> | LobbyParticipantCreateWithoutUserInput[] | LobbyParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutUserInput | LobbyParticipantCreateOrConnectWithoutUserInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutUserInput | LobbyParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LobbyParticipantCreateManyUserInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutUserInput | LobbyParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutUserInput | LobbyParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type PodcastUpdateManyWithoutHostNestedInput = {
    create?: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput> | PodcastCreateWithoutHostInput[] | PodcastUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutHostInput | PodcastCreateOrConnectWithoutHostInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutHostInput | PodcastUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: PodcastCreateManyHostInputEnvelope
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutHostInput | PodcastUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutHostInput | PodcastUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type MemeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput> | MemeCreateWithoutAuthorInput[] | MemeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MemeCreateOrConnectWithoutAuthorInput | MemeCreateOrConnectWithoutAuthorInput[]
    upsert?: MemeUpsertWithWhereUniqueWithoutAuthorInput | MemeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MemeCreateManyAuthorInputEnvelope
    set?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    disconnect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    delete?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    connect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    update?: MemeUpdateWithWhereUniqueWithoutAuthorInput | MemeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MemeUpdateManyWithWhereWithoutAuthorInput | MemeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MemeScalarWhereInput | MemeScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleReadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput> | ArticleReadCreateWithoutUserInput[] | ArticleReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutUserInput | ArticleReadCreateOrConnectWithoutUserInput[]
    upsert?: ArticleReadUpsertWithWhereUniqueWithoutUserInput | ArticleReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleReadCreateManyUserInputEnvelope
    set?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    disconnect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    delete?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    update?: ArticleReadUpdateWithWhereUniqueWithoutUserInput | ArticleReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleReadUpdateManyWithWhereWithoutUserInput | ArticleReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
  }

  export type ArticleLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutUserInput | ArticleLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutUserInput | ArticleLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutUserInput | ArticleLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type PointActionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput> | PointActionCreateWithoutUserInput[] | PointActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointActionCreateOrConnectWithoutUserInput | PointActionCreateOrConnectWithoutUserInput[]
    upsert?: PointActionUpsertWithWhereUniqueWithoutUserInput | PointActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointActionCreateManyUserInputEnvelope
    set?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    disconnect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    delete?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    connect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    update?: PointActionUpdateWithWhereUniqueWithoutUserInput | PointActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointActionUpdateManyWithWhereWithoutUserInput | PointActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointActionScalarWhereInput | PointActionScalarWhereInput[]
  }

  export type LobbyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput> | LobbyCreateWithoutOwnerInput[] | LobbyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LobbyCreateOrConnectWithoutOwnerInput | LobbyCreateOrConnectWithoutOwnerInput[]
    upsert?: LobbyUpsertWithWhereUniqueWithoutOwnerInput | LobbyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LobbyCreateManyOwnerInputEnvelope
    set?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    disconnect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    delete?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    connect?: LobbyWhereUniqueInput | LobbyWhereUniqueInput[]
    update?: LobbyUpdateWithWhereUniqueWithoutOwnerInput | LobbyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LobbyUpdateManyWithWhereWithoutOwnerInput | LobbyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LobbyScalarWhereInput | LobbyScalarWhereInput[]
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput> | LobbyParticipantCreateWithoutUserInput[] | LobbyParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutUserInput | LobbyParticipantCreateOrConnectWithoutUserInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutUserInput | LobbyParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LobbyParticipantCreateManyUserInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutUserInput | LobbyParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutUserInput | LobbyParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type PodcastUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput> | PodcastCreateWithoutHostInput[] | PodcastUncheckedCreateWithoutHostInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutHostInput | PodcastCreateOrConnectWithoutHostInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutHostInput | PodcastUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: PodcastCreateManyHostInputEnvelope
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutHostInput | PodcastUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutHostInput | PodcastUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type MemeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput> | MemeCreateWithoutAuthorInput[] | MemeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: MemeCreateOrConnectWithoutAuthorInput | MemeCreateOrConnectWithoutAuthorInput[]
    upsert?: MemeUpsertWithWhereUniqueWithoutAuthorInput | MemeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: MemeCreateManyAuthorInputEnvelope
    set?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    disconnect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    delete?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    connect?: MemeWhereUniqueInput | MemeWhereUniqueInput[]
    update?: MemeUpdateWithWhereUniqueWithoutAuthorInput | MemeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: MemeUpdateManyWithWhereWithoutAuthorInput | MemeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: MemeScalarWhereInput | MemeScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleReadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput> | ArticleReadCreateWithoutUserInput[] | ArticleReadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutUserInput | ArticleReadCreateOrConnectWithoutUserInput[]
    upsert?: ArticleReadUpsertWithWhereUniqueWithoutUserInput | ArticleReadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleReadCreateManyUserInputEnvelope
    set?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    disconnect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    delete?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    update?: ArticleReadUpdateWithWhereUniqueWithoutUserInput | ArticleReadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleReadUpdateManyWithWhereWithoutUserInput | ArticleReadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
  }

  export type ArticleLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput> | ArticleLikeCreateWithoutUserInput[] | ArticleLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutUserInput | ArticleLikeCreateOrConnectWithoutUserInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutUserInput | ArticleLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleLikeCreateManyUserInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutUserInput | ArticleLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutUserInput | ArticleLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type PointActionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput> | PointActionCreateWithoutUserInput[] | PointActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointActionCreateOrConnectWithoutUserInput | PointActionCreateOrConnectWithoutUserInput[]
    upsert?: PointActionUpsertWithWhereUniqueWithoutUserInput | PointActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointActionCreateManyUserInputEnvelope
    set?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    disconnect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    delete?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    connect?: PointActionWhereUniqueInput | PointActionWhereUniqueInput[]
    update?: PointActionUpdateWithWhereUniqueWithoutUserInput | PointActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointActionUpdateManyWithWhereWithoutUserInput | PointActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointActionScalarWhereInput | PointActionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLobbiesHostedInput = {
    create?: XOR<UserCreateWithoutLobbiesHostedInput, UserUncheckedCreateWithoutLobbiesHostedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLobbiesHostedInput
    connect?: UserWhereUniqueInput
  }

  export type LobbyParticipantCreateNestedManyWithoutLobbyInput = {
    create?: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput> | LobbyParticipantCreateWithoutLobbyInput[] | LobbyParticipantUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutLobbyInput | LobbyParticipantCreateOrConnectWithoutLobbyInput[]
    createMany?: LobbyParticipantCreateManyLobbyInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type LobbyParticipantUncheckedCreateNestedManyWithoutLobbyInput = {
    create?: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput> | LobbyParticipantCreateWithoutLobbyInput[] | LobbyParticipantUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutLobbyInput | LobbyParticipantCreateOrConnectWithoutLobbyInput[]
    createMany?: LobbyParticipantCreateManyLobbyInputEnvelope
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
  }

  export type EnumLobbyStatusFieldUpdateOperationsInput = {
    set?: $Enums.LobbyStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLobbiesHostedNestedInput = {
    create?: XOR<UserCreateWithoutLobbiesHostedInput, UserUncheckedCreateWithoutLobbiesHostedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLobbiesHostedInput
    upsert?: UserUpsertWithoutLobbiesHostedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLobbiesHostedInput, UserUpdateWithoutLobbiesHostedInput>, UserUncheckedUpdateWithoutLobbiesHostedInput>
  }

  export type LobbyParticipantUpdateManyWithoutLobbyNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput> | LobbyParticipantCreateWithoutLobbyInput[] | LobbyParticipantUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutLobbyInput | LobbyParticipantCreateOrConnectWithoutLobbyInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutLobbyInput | LobbyParticipantUpsertWithWhereUniqueWithoutLobbyInput[]
    createMany?: LobbyParticipantCreateManyLobbyInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutLobbyInput | LobbyParticipantUpdateWithWhereUniqueWithoutLobbyInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutLobbyInput | LobbyParticipantUpdateManyWithWhereWithoutLobbyInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutLobbyNestedInput = {
    create?: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput> | LobbyParticipantCreateWithoutLobbyInput[] | LobbyParticipantUncheckedCreateWithoutLobbyInput[]
    connectOrCreate?: LobbyParticipantCreateOrConnectWithoutLobbyInput | LobbyParticipantCreateOrConnectWithoutLobbyInput[]
    upsert?: LobbyParticipantUpsertWithWhereUniqueWithoutLobbyInput | LobbyParticipantUpsertWithWhereUniqueWithoutLobbyInput[]
    createMany?: LobbyParticipantCreateManyLobbyInputEnvelope
    set?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    disconnect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    delete?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    connect?: LobbyParticipantWhereUniqueInput | LobbyParticipantWhereUniqueInput[]
    update?: LobbyParticipantUpdateWithWhereUniqueWithoutLobbyInput | LobbyParticipantUpdateWithWhereUniqueWithoutLobbyInput[]
    updateMany?: LobbyParticipantUpdateManyWithWhereWithoutLobbyInput | LobbyParticipantUpdateManyWithWhereWithoutLobbyInput[]
    deleteMany?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
  }

  export type LobbyCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<LobbyCreateWithoutParticipantsInput, LobbyUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: LobbyCreateOrConnectWithoutParticipantsInput
    connect?: LobbyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLobbyParticipationInput = {
    create?: XOR<UserCreateWithoutLobbyParticipationInput, UserUncheckedCreateWithoutLobbyParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLobbyParticipationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumParticipantRoleFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantRole
  }

  export type LobbyUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<LobbyCreateWithoutParticipantsInput, LobbyUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: LobbyCreateOrConnectWithoutParticipantsInput
    upsert?: LobbyUpsertWithoutParticipantsInput
    connect?: LobbyWhereUniqueInput
    update?: XOR<XOR<LobbyUpdateToOneWithWhereWithoutParticipantsInput, LobbyUpdateWithoutParticipantsInput>, LobbyUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutLobbyParticipationNestedInput = {
    create?: XOR<UserCreateWithoutLobbyParticipationInput, UserUncheckedCreateWithoutLobbyParticipationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLobbyParticipationInput
    upsert?: UserUpsertWithoutLobbyParticipationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLobbyParticipationInput, UserUpdateWithoutLobbyParticipationInput>, UserUncheckedUpdateWithoutLobbyParticipationInput>
  }

  export type UserCreateNestedOneWithoutMemesInput = {
    create?: XOR<UserCreateWithoutMemesInput, UserUncheckedCreateWithoutMemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMemesNestedInput = {
    create?: XOR<UserCreateWithoutMemesInput, UserUncheckedCreateWithoutMemesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemesInput
    upsert?: UserUpsertWithoutMemesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemesInput, UserUpdateWithoutMemesInput>, UserUncheckedUpdateWithoutMemesInput>
  }

  export type UserCreateNestedOneWithoutPodcastsInput = {
    create?: XOR<UserCreateWithoutPodcastsInput, UserUncheckedCreateWithoutPodcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPodcastsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPodcastsNestedInput = {
    create?: XOR<UserCreateWithoutPodcastsInput, UserUncheckedCreateWithoutPodcastsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPodcastsInput
    upsert?: UserUpsertWithoutPodcastsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPodcastsInput, UserUpdateWithoutPodcastsInput>, UserUncheckedUpdateWithoutPodcastsInput>
  }

  export type UserCreateNestedOneWithoutEventsOrganizedInput = {
    create?: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsOrganizedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEventsOrganizedNestedInput = {
    create?: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsOrganizedInput
    upsert?: UserUpsertWithoutEventsOrganizedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsOrganizedInput, UserUpdateWithoutEventsOrganizedInput>, UserUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleReadCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput> | ArticleReadCreateWithoutArticleInput[] | ArticleReadUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutArticleInput | ArticleReadCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleReadCreateManyArticleInputEnvelope
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
  }

  export type ArticleLikeCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type ArticleReadUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput> | ArticleReadCreateWithoutArticleInput[] | ArticleReadUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutArticleInput | ArticleReadCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleReadCreateManyArticleInputEnvelope
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
  }

  export type ArticleLikeUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleReadUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput> | ArticleReadCreateWithoutArticleInput[] | ArticleReadUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutArticleInput | ArticleReadCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleReadUpsertWithWhereUniqueWithoutArticleInput | ArticleReadUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleReadCreateManyArticleInputEnvelope
    set?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    disconnect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    delete?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    update?: ArticleReadUpdateWithWhereUniqueWithoutArticleInput | ArticleReadUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleReadUpdateManyWithWhereWithoutArticleInput | ArticleReadUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
  }

  export type ArticleLikeUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutArticleInput | ArticleLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutArticleInput | ArticleLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutArticleInput | ArticleLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type ArticleReadUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput> | ArticleReadCreateWithoutArticleInput[] | ArticleReadUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleReadCreateOrConnectWithoutArticleInput | ArticleReadCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleReadUpsertWithWhereUniqueWithoutArticleInput | ArticleReadUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleReadCreateManyArticleInputEnvelope
    set?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    disconnect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    delete?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    connect?: ArticleReadWhereUniqueInput | ArticleReadWhereUniqueInput[]
    update?: ArticleReadUpdateWithWhereUniqueWithoutArticleInput | ArticleReadUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleReadUpdateManyWithWhereWithoutArticleInput | ArticleReadUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
  }

  export type ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput> | ArticleLikeCreateWithoutArticleInput[] | ArticleLikeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleLikeCreateOrConnectWithoutArticleInput | ArticleLikeCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleLikeUpsertWithWhereUniqueWithoutArticleInput | ArticleLikeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleLikeCreateManyArticleInputEnvelope
    set?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    disconnect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    delete?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    connect?: ArticleLikeWhereUniqueInput | ArticleLikeWhereUniqueInput[]
    update?: ArticleLikeUpdateWithWhereUniqueWithoutArticleInput | ArticleLikeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleLikeUpdateManyWithWhereWithoutArticleInput | ArticleLikeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArticleReadsInput = {
    create?: XOR<UserCreateWithoutArticleReadsInput, UserUncheckedCreateWithoutArticleReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleReadsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutReadersInput = {
    create?: XOR<ArticleCreateWithoutReadersInput, ArticleUncheckedCreateWithoutReadersInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutReadersInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutArticleReadsNestedInput = {
    create?: XOR<UserCreateWithoutArticleReadsInput, UserUncheckedCreateWithoutArticleReadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticleReadsInput
    upsert?: UserUpsertWithoutArticleReadsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticleReadsInput, UserUpdateWithoutArticleReadsInput>, UserUncheckedUpdateWithoutArticleReadsInput>
  }

  export type ArticleUpdateOneRequiredWithoutReadersNestedInput = {
    create?: XOR<ArticleCreateWithoutReadersInput, ArticleUncheckedCreateWithoutReadersInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutReadersInput
    upsert?: ArticleUpsertWithoutReadersInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutReadersInput, ArticleUpdateWithoutReadersInput>, ArticleUncheckedUpdateWithoutReadersInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleCreateNestedOneWithoutLikesInput = {
    create?: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput
    connect?: ArticleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ArticleUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput
    upsert?: ArticleUpsertWithoutLikesInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutLikesInput, ArticleUpdateWithoutLikesInput>, ArticleUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutPointActionsInput = {
    create?: XOR<UserCreateWithoutPointActionsInput, UserUncheckedCreateWithoutPointActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointActionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPointActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PointActionType
  }

  export type UserUpdateOneRequiredWithoutPointActionsNestedInput = {
    create?: XOR<UserCreateWithoutPointActionsInput, UserUncheckedCreateWithoutPointActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointActionsInput
    upsert?: UserUpsertWithoutPointActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointActionsInput, UserUpdateWithoutPointActionsInput>, UserUncheckedUpdateWithoutPointActionsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumLobbyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LobbyStatus | EnumLobbyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLobbyStatusFilter<$PrismaModel> | $Enums.LobbyStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLobbyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LobbyStatus | EnumLobbyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LobbyStatus[] | ListEnumLobbyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLobbyStatusWithAggregatesFilter<$PrismaModel> | $Enums.LobbyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLobbyStatusFilter<$PrismaModel>
    _max?: NestedEnumLobbyStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumParticipantRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleFilter<$PrismaModel> | $Enums.ParticipantRole
  }

  export type NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantRole | EnumParticipantRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantRole[] | ListEnumParticipantRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantRoleWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantRoleFilter<$PrismaModel>
    _max?: NestedEnumParticipantRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPointActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointActionType | EnumPointActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionTypeFilter<$PrismaModel> | $Enums.PointActionType
  }

  export type NestedEnumPointActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointActionType | EnumPointActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointActionType[] | ListEnumPointActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointActionTypeFilter<$PrismaModel>
    _max?: NestedEnumPointActionTypeFilter<$PrismaModel>
  }

  export type LobbyCreateWithoutOwnerInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: LobbyParticipantCreateNestedManyWithoutLobbyInput
  }

  export type LobbyUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: LobbyParticipantUncheckedCreateNestedManyWithoutLobbyInput
  }

  export type LobbyCreateOrConnectWithoutOwnerInput = {
    where: LobbyWhereUniqueInput
    create: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput>
  }

  export type LobbyCreateManyOwnerInputEnvelope = {
    data: LobbyCreateManyOwnerInput | LobbyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type LobbyParticipantCreateWithoutUserInput = {
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
    lobby: LobbyCreateNestedOneWithoutParticipantsInput
  }

  export type LobbyParticipantUncheckedCreateWithoutUserInput = {
    lobbyId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type LobbyParticipantCreateOrConnectWithoutUserInput = {
    where: LobbyParticipantWhereUniqueInput
    create: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput>
  }

  export type LobbyParticipantCreateManyUserInputEnvelope = {
    data: LobbyParticipantCreateManyUserInput | LobbyParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PodcastCreateWithoutHostInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    createdAt?: Date | string
  }

  export type PodcastUncheckedCreateWithoutHostInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    createdAt?: Date | string
  }

  export type PodcastCreateOrConnectWithoutHostInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput>
  }

  export type PodcastCreateManyHostInputEnvelope = {
    data: PodcastCreateManyHostInput | PodcastCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type MemeCreateWithoutAuthorInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    createdAt?: Date | string
  }

  export type MemeUncheckedCreateWithoutAuthorInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    createdAt?: Date | string
  }

  export type MemeCreateOrConnectWithoutAuthorInput = {
    where: MemeWhereUniqueInput
    create: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput>
  }

  export type MemeCreateManyAuthorInputEnvelope = {
    data: MemeCreateManyAuthorInput | MemeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    createdAt?: Date | string
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    createdAt?: Date | string
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type ArticleCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    readers?: ArticleReadCreateNestedManyWithoutArticleInput
    likes?: ArticleLikeCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    readers?: ArticleReadUncheckedCreateNestedManyWithoutArticleInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleCreateManyAuthorInputEnvelope = {
    data: ArticleCreateManyAuthorInput | ArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ArticleReadCreateWithoutUserInput = {
    id?: string
    readAt?: Date | string
    article: ArticleCreateNestedOneWithoutReadersInput
  }

  export type ArticleReadUncheckedCreateWithoutUserInput = {
    id?: string
    articleId: string
    readAt?: Date | string
  }

  export type ArticleReadCreateOrConnectWithoutUserInput = {
    where: ArticleReadWhereUniqueInput
    create: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput>
  }

  export type ArticleReadCreateManyUserInputEnvelope = {
    data: ArticleReadCreateManyUserInput | ArticleReadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    article: ArticleCreateNestedOneWithoutLikesInput
  }

  export type ArticleLikeUncheckedCreateWithoutUserInput = {
    id?: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleLikeCreateOrConnectWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    create: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleLikeCreateManyUserInputEnvelope = {
    data: ArticleLikeCreateManyUserInput | ArticleLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointActionCreateWithoutUserInput = {
    id?: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PointActionUncheckedCreateWithoutUserInput = {
    id?: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PointActionCreateOrConnectWithoutUserInput = {
    where: PointActionWhereUniqueInput
    create: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput>
  }

  export type PointActionCreateManyUserInputEnvelope = {
    data: PointActionCreateManyUserInput | PointActionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LobbyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LobbyWhereUniqueInput
    update: XOR<LobbyUpdateWithoutOwnerInput, LobbyUncheckedUpdateWithoutOwnerInput>
    create: XOR<LobbyCreateWithoutOwnerInput, LobbyUncheckedCreateWithoutOwnerInput>
  }

  export type LobbyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LobbyWhereUniqueInput
    data: XOR<LobbyUpdateWithoutOwnerInput, LobbyUncheckedUpdateWithoutOwnerInput>
  }

  export type LobbyUpdateManyWithWhereWithoutOwnerInput = {
    where: LobbyScalarWhereInput
    data: XOR<LobbyUpdateManyMutationInput, LobbyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LobbyScalarWhereInput = {
    AND?: LobbyScalarWhereInput | LobbyScalarWhereInput[]
    OR?: LobbyScalarWhereInput[]
    NOT?: LobbyScalarWhereInput | LobbyScalarWhereInput[]
    id?: StringFilter<"Lobby"> | string
    title?: StringFilter<"Lobby"> | string
    topic?: StringFilter<"Lobby"> | string
    status?: EnumLobbyStatusFilter<"Lobby"> | $Enums.LobbyStatus
    ownerId?: StringFilter<"Lobby"> | string
    maxParticipants?: IntFilter<"Lobby"> | number
    startedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Lobby"> | Date | string | null
    createdAt?: DateTimeFilter<"Lobby"> | Date | string
    updatedAt?: DateTimeFilter<"Lobby"> | Date | string
  }

  export type LobbyParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: LobbyParticipantWhereUniqueInput
    update: XOR<LobbyParticipantUpdateWithoutUserInput, LobbyParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<LobbyParticipantCreateWithoutUserInput, LobbyParticipantUncheckedCreateWithoutUserInput>
  }

  export type LobbyParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: LobbyParticipantWhereUniqueInput
    data: XOR<LobbyParticipantUpdateWithoutUserInput, LobbyParticipantUncheckedUpdateWithoutUserInput>
  }

  export type LobbyParticipantUpdateManyWithWhereWithoutUserInput = {
    where: LobbyParticipantScalarWhereInput
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type LobbyParticipantScalarWhereInput = {
    AND?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
    OR?: LobbyParticipantScalarWhereInput[]
    NOT?: LobbyParticipantScalarWhereInput | LobbyParticipantScalarWhereInput[]
    lobbyId?: StringFilter<"LobbyParticipant"> | string
    userId?: StringFilter<"LobbyParticipant"> | string
    role?: EnumParticipantRoleFilter<"LobbyParticipant"> | $Enums.ParticipantRole
    joinedAt?: DateTimeFilter<"LobbyParticipant"> | Date | string
  }

  export type PodcastUpsertWithWhereUniqueWithoutHostInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutHostInput, PodcastUncheckedUpdateWithoutHostInput>
    create: XOR<PodcastCreateWithoutHostInput, PodcastUncheckedCreateWithoutHostInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutHostInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutHostInput, PodcastUncheckedUpdateWithoutHostInput>
  }

  export type PodcastUpdateManyWithWhereWithoutHostInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutHostInput>
  }

  export type PodcastScalarWhereInput = {
    AND?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
    OR?: PodcastScalarWhereInput[]
    NOT?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
    id?: StringFilter<"Podcast"> | string
    title?: StringFilter<"Podcast"> | string
    description?: StringNullableFilter<"Podcast"> | string | null
    audioUrl?: StringFilter<"Podcast"> | string
    duration?: IntNullableFilter<"Podcast"> | number | null
    hostId?: StringFilter<"Podcast"> | string
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
  }

  export type MemeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: MemeWhereUniqueInput
    update: XOR<MemeUpdateWithoutAuthorInput, MemeUncheckedUpdateWithoutAuthorInput>
    create: XOR<MemeCreateWithoutAuthorInput, MemeUncheckedCreateWithoutAuthorInput>
  }

  export type MemeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: MemeWhereUniqueInput
    data: XOR<MemeUpdateWithoutAuthorInput, MemeUncheckedUpdateWithoutAuthorInput>
  }

  export type MemeUpdateManyWithWhereWithoutAuthorInput = {
    where: MemeScalarWhereInput
    data: XOR<MemeUpdateManyMutationInput, MemeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type MemeScalarWhereInput = {
    AND?: MemeScalarWhereInput | MemeScalarWhereInput[]
    OR?: MemeScalarWhereInput[]
    NOT?: MemeScalarWhereInput | MemeScalarWhereInput[]
    id?: StringFilter<"Meme"> | string
    caption?: StringFilter<"Meme"> | string
    imageUrl?: StringFilter<"Meme"> | string
    likes?: IntFilter<"Meme"> | number
    authorId?: StringFilter<"Meme"> | string
    createdAt?: DateTimeFilter<"Meme"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    scheduledFor?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    summary?: StringNullableFilter<"Article"> | string | null
    authorId?: StringFilter<"Article"> | string
    readCount?: IntFilter<"Article"> | number
    likesCount?: IntFilter<"Article"> | number
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleReadUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleReadWhereUniqueInput
    update: XOR<ArticleReadUpdateWithoutUserInput, ArticleReadUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleReadCreateWithoutUserInput, ArticleReadUncheckedCreateWithoutUserInput>
  }

  export type ArticleReadUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleReadWhereUniqueInput
    data: XOR<ArticleReadUpdateWithoutUserInput, ArticleReadUncheckedUpdateWithoutUserInput>
  }

  export type ArticleReadUpdateManyWithWhereWithoutUserInput = {
    where: ArticleReadScalarWhereInput
    data: XOR<ArticleReadUpdateManyMutationInput, ArticleReadUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleReadScalarWhereInput = {
    AND?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
    OR?: ArticleReadScalarWhereInput[]
    NOT?: ArticleReadScalarWhereInput | ArticleReadScalarWhereInput[]
    id?: StringFilter<"ArticleRead"> | string
    userId?: StringFilter<"ArticleRead"> | string
    articleId?: StringFilter<"ArticleRead"> | string
    readAt?: DateTimeFilter<"ArticleRead"> | Date | string
  }

  export type ArticleLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    update: XOR<ArticleLikeUpdateWithoutUserInput, ArticleLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleLikeCreateWithoutUserInput, ArticleLikeUncheckedCreateWithoutUserInput>
  }

  export type ArticleLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleLikeWhereUniqueInput
    data: XOR<ArticleLikeUpdateWithoutUserInput, ArticleLikeUncheckedUpdateWithoutUserInput>
  }

  export type ArticleLikeUpdateManyWithWhereWithoutUserInput = {
    where: ArticleLikeScalarWhereInput
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleLikeScalarWhereInput = {
    AND?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
    OR?: ArticleLikeScalarWhereInput[]
    NOT?: ArticleLikeScalarWhereInput | ArticleLikeScalarWhereInput[]
    id?: StringFilter<"ArticleLike"> | string
    userId?: StringFilter<"ArticleLike"> | string
    articleId?: StringFilter<"ArticleLike"> | string
    createdAt?: DateTimeFilter<"ArticleLike"> | Date | string
  }

  export type PointActionUpsertWithWhereUniqueWithoutUserInput = {
    where: PointActionWhereUniqueInput
    update: XOR<PointActionUpdateWithoutUserInput, PointActionUncheckedUpdateWithoutUserInput>
    create: XOR<PointActionCreateWithoutUserInput, PointActionUncheckedCreateWithoutUserInput>
  }

  export type PointActionUpdateWithWhereUniqueWithoutUserInput = {
    where: PointActionWhereUniqueInput
    data: XOR<PointActionUpdateWithoutUserInput, PointActionUncheckedUpdateWithoutUserInput>
  }

  export type PointActionUpdateManyWithWhereWithoutUserInput = {
    where: PointActionScalarWhereInput
    data: XOR<PointActionUpdateManyMutationInput, PointActionUncheckedUpdateManyWithoutUserInput>
  }

  export type PointActionScalarWhereInput = {
    AND?: PointActionScalarWhereInput | PointActionScalarWhereInput[]
    OR?: PointActionScalarWhereInput[]
    NOT?: PointActionScalarWhereInput | PointActionScalarWhereInput[]
    id?: StringFilter<"PointAction"> | string
    userId?: StringFilter<"PointAction"> | string
    action?: EnumPointActionTypeFilter<"PointAction"> | $Enums.PointActionType
    points?: IntFilter<"PointAction"> | number
    metadata?: JsonNullableFilter<"PointAction">
    createdAt?: DateTimeFilter<"PointAction"> | Date | string
  }

  export type UserCreateWithoutLobbiesHostedInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLobbiesHostedInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLobbiesHostedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLobbiesHostedInput, UserUncheckedCreateWithoutLobbiesHostedInput>
  }

  export type LobbyParticipantCreateWithoutLobbyInput = {
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutLobbyParticipationInput
  }

  export type LobbyParticipantUncheckedCreateWithoutLobbyInput = {
    userId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type LobbyParticipantCreateOrConnectWithoutLobbyInput = {
    where: LobbyParticipantWhereUniqueInput
    create: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput>
  }

  export type LobbyParticipantCreateManyLobbyInputEnvelope = {
    data: LobbyParticipantCreateManyLobbyInput | LobbyParticipantCreateManyLobbyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLobbiesHostedInput = {
    update: XOR<UserUpdateWithoutLobbiesHostedInput, UserUncheckedUpdateWithoutLobbiesHostedInput>
    create: XOR<UserCreateWithoutLobbiesHostedInput, UserUncheckedCreateWithoutLobbiesHostedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLobbiesHostedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLobbiesHostedInput, UserUncheckedUpdateWithoutLobbiesHostedInput>
  }

  export type UserUpdateWithoutLobbiesHostedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLobbiesHostedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LobbyParticipantUpsertWithWhereUniqueWithoutLobbyInput = {
    where: LobbyParticipantWhereUniqueInput
    update: XOR<LobbyParticipantUpdateWithoutLobbyInput, LobbyParticipantUncheckedUpdateWithoutLobbyInput>
    create: XOR<LobbyParticipantCreateWithoutLobbyInput, LobbyParticipantUncheckedCreateWithoutLobbyInput>
  }

  export type LobbyParticipantUpdateWithWhereUniqueWithoutLobbyInput = {
    where: LobbyParticipantWhereUniqueInput
    data: XOR<LobbyParticipantUpdateWithoutLobbyInput, LobbyParticipantUncheckedUpdateWithoutLobbyInput>
  }

  export type LobbyParticipantUpdateManyWithWhereWithoutLobbyInput = {
    where: LobbyParticipantScalarWhereInput
    data: XOR<LobbyParticipantUpdateManyMutationInput, LobbyParticipantUncheckedUpdateManyWithoutLobbyInput>
  }

  export type LobbyCreateWithoutParticipantsInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutLobbiesHostedInput
  }

  export type LobbyUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    ownerId: string
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LobbyCreateOrConnectWithoutParticipantsInput = {
    where: LobbyWhereUniqueInput
    create: XOR<LobbyCreateWithoutParticipantsInput, LobbyUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutLobbyParticipationInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLobbyParticipationInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLobbyParticipationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLobbyParticipationInput, UserUncheckedCreateWithoutLobbyParticipationInput>
  }

  export type LobbyUpsertWithoutParticipantsInput = {
    update: XOR<LobbyUpdateWithoutParticipantsInput, LobbyUncheckedUpdateWithoutParticipantsInput>
    create: XOR<LobbyCreateWithoutParticipantsInput, LobbyUncheckedCreateWithoutParticipantsInput>
    where?: LobbyWhereInput
  }

  export type LobbyUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: LobbyWhereInput
    data: XOR<LobbyUpdateWithoutParticipantsInput, LobbyUncheckedUpdateWithoutParticipantsInput>
  }

  export type LobbyUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLobbiesHostedNestedInput
  }

  export type LobbyUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    ownerId?: StringFieldUpdateOperationsInput | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutLobbyParticipationInput = {
    update: XOR<UserUpdateWithoutLobbyParticipationInput, UserUncheckedUpdateWithoutLobbyParticipationInput>
    create: XOR<UserCreateWithoutLobbyParticipationInput, UserUncheckedCreateWithoutLobbyParticipationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLobbyParticipationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLobbyParticipationInput, UserUncheckedUpdateWithoutLobbyParticipationInput>
  }

  export type UserUpdateWithoutLobbyParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLobbyParticipationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMemesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemesInput, UserUncheckedCreateWithoutMemesInput>
  }

  export type UserUpsertWithoutMemesInput = {
    update: XOR<UserUpdateWithoutMemesInput, UserUncheckedUpdateWithoutMemesInput>
    create: XOR<UserCreateWithoutMemesInput, UserUncheckedCreateWithoutMemesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemesInput, UserUncheckedUpdateWithoutMemesInput>
  }

  export type UserUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPodcastsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPodcastsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPodcastsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPodcastsInput, UserUncheckedCreateWithoutPodcastsInput>
  }

  export type UserUpsertWithoutPodcastsInput = {
    update: XOR<UserUpdateWithoutPodcastsInput, UserUncheckedUpdateWithoutPodcastsInput>
    create: XOR<UserCreateWithoutPodcastsInput, UserUncheckedCreateWithoutPodcastsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPodcastsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPodcastsInput, UserUncheckedUpdateWithoutPodcastsInput>
  }

  export type UserUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEventsOrganizedInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsOrganizedInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsOrganizedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
  }

  export type UserUpsertWithoutEventsOrganizedInput = {
    update: XOR<UserUpdateWithoutEventsOrganizedInput, UserUncheckedUpdateWithoutEventsOrganizedInput>
    create: XOR<UserCreateWithoutEventsOrganizedInput, UserUncheckedCreateWithoutEventsOrganizedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsOrganizedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsOrganizedInput, UserUncheckedUpdateWithoutEventsOrganizedInput>
  }

  export type UserUpdateWithoutEventsOrganizedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsOrganizedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleReadCreateWithoutArticleInput = {
    id?: string
    readAt?: Date | string
    user: UserCreateNestedOneWithoutArticleReadsInput
  }

  export type ArticleReadUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    readAt?: Date | string
  }

  export type ArticleReadCreateOrConnectWithoutArticleInput = {
    where: ArticleReadWhereUniqueInput
    create: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput>
  }

  export type ArticleReadCreateManyArticleInputEnvelope = {
    data: ArticleReadCreateManyArticleInput | ArticleReadCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ArticleLikeCreateWithoutArticleInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type ArticleLikeUncheckedCreateWithoutArticleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ArticleLikeCreateOrConnectWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    create: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput>
  }

  export type ArticleLikeCreateManyArticleInputEnvelope = {
    data: ArticleLikeCreateManyArticleInput | ArticleLikeCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleReadUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleReadWhereUniqueInput
    update: XOR<ArticleReadUpdateWithoutArticleInput, ArticleReadUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleReadCreateWithoutArticleInput, ArticleReadUncheckedCreateWithoutArticleInput>
  }

  export type ArticleReadUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleReadWhereUniqueInput
    data: XOR<ArticleReadUpdateWithoutArticleInput, ArticleReadUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleReadUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleReadScalarWhereInput
    data: XOR<ArticleReadUpdateManyMutationInput, ArticleReadUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleLikeUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    update: XOR<ArticleLikeUpdateWithoutArticleInput, ArticleLikeUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleLikeCreateWithoutArticleInput, ArticleLikeUncheckedCreateWithoutArticleInput>
  }

  export type ArticleLikeUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleLikeWhereUniqueInput
    data: XOR<ArticleLikeUpdateWithoutArticleInput, ArticleLikeUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleLikeUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleLikeScalarWhereInput
    data: XOR<ArticleLikeUpdateManyMutationInput, ArticleLikeUncheckedUpdateManyWithoutArticleInput>
  }

  export type UserCreateWithoutArticleReadsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticleReadsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticleReadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticleReadsInput, UserUncheckedCreateWithoutArticleReadsInput>
  }

  export type ArticleCreateWithoutReadersInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    likes?: ArticleLikeCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutReadersInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    authorId: string
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutReadersInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutReadersInput, ArticleUncheckedCreateWithoutReadersInput>
  }

  export type UserUpsertWithoutArticleReadsInput = {
    update: XOR<UserUpdateWithoutArticleReadsInput, UserUncheckedUpdateWithoutArticleReadsInput>
    create: XOR<UserCreateWithoutArticleReadsInput, UserUncheckedCreateWithoutArticleReadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticleReadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticleReadsInput, UserUncheckedUpdateWithoutArticleReadsInput>
  }

  export type UserUpdateWithoutArticleReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticleReadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleUpsertWithoutReadersInput = {
    update: XOR<ArticleUpdateWithoutReadersInput, ArticleUncheckedUpdateWithoutReadersInput>
    create: XOR<ArticleCreateWithoutReadersInput, ArticleUncheckedCreateWithoutReadersInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutReadersInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutReadersInput, ArticleUncheckedUpdateWithoutReadersInput>
  }

  export type ArticleUpdateWithoutReadersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    likes?: ArticleLikeUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutReadersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    pointActions?: PointActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    pointActions?: PointActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ArticleCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutArticlesInput
    readers?: ArticleReadCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    authorId: string
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    readers?: ArticleReadUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutLikesInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    pointActions?: PointActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleUpsertWithoutLikesInput = {
    update: XOR<ArticleUpdateWithoutLikesInput, ArticleUncheckedUpdateWithoutLikesInput>
    create: XOR<ArticleCreateWithoutLikesInput, ArticleUncheckedCreateWithoutLikesInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutLikesInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutLikesInput, ArticleUncheckedUpdateWithoutLikesInput>
  }

  export type ArticleUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutArticlesNestedInput
    readers?: ArticleReadUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readers?: ArticleReadUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type UserCreateWithoutPointActionsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantCreateNestedManyWithoutUserInput
    podcasts?: PodcastCreateNestedManyWithoutHostInput
    memes?: MemeCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventCreateNestedManyWithoutOrganizerInput
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadCreateNestedManyWithoutUserInput
    likes?: ArticleLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointActionsInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    imageUrl?: string | null
    bio?: string | null
    role?: $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: number
    lastLoginAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lobbiesHosted?: LobbyUncheckedCreateNestedManyWithoutOwnerInput
    lobbyParticipation?: LobbyParticipantUncheckedCreateNestedManyWithoutUserInput
    podcasts?: PodcastUncheckedCreateNestedManyWithoutHostInput
    memes?: MemeUncheckedCreateNestedManyWithoutAuthorInput
    eventsOrganized?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    articleReads?: ArticleReadUncheckedCreateNestedManyWithoutUserInput
    likes?: ArticleLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointActionsInput, UserUncheckedCreateWithoutPointActionsInput>
  }

  export type UserUpsertWithoutPointActionsInput = {
    update: XOR<UserUpdateWithoutPointActionsInput, UserUncheckedUpdateWithoutPointActionsInput>
    create: XOR<UserCreateWithoutPointActionsInput, UserUncheckedCreateWithoutPointActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointActionsInput, UserUncheckedUpdateWithoutPointActionsInput>
  }

  export type UserUpdateWithoutPointActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUpdateManyWithoutHostNestedInput
    memes?: MemeUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    techStack?: NullableJsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobbiesHosted?: LobbyUncheckedUpdateManyWithoutOwnerNestedInput
    lobbyParticipation?: LobbyParticipantUncheckedUpdateManyWithoutUserNestedInput
    podcasts?: PodcastUncheckedUpdateManyWithoutHostNestedInput
    memes?: MemeUncheckedUpdateManyWithoutAuthorNestedInput
    eventsOrganized?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    articleReads?: ArticleReadUncheckedUpdateManyWithoutUserNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LobbyCreateManyOwnerInput = {
    id?: string
    title: string
    topic: string
    status?: $Enums.LobbyStatus
    maxParticipants?: number
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LobbyParticipantCreateManyUserInput = {
    lobbyId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type PodcastCreateManyHostInput = {
    id?: string
    title: string
    description?: string | null
    audioUrl: string
    duration?: number | null
    createdAt?: Date | string
  }

  export type MemeCreateManyAuthorInput = {
    id?: string
    caption: string
    imageUrl: string
    likes?: number
    createdAt?: Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    scheduledFor: Date | string
    createdAt?: Date | string
  }

  export type ArticleCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    summary?: string | null
    readCount?: number
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleReadCreateManyUserInput = {
    id?: string
    articleId: string
    readAt?: Date | string
  }

  export type ArticleLikeCreateManyUserInput = {
    id?: string
    articleId: string
    createdAt?: Date | string
  }

  export type PointActionCreateManyUserInput = {
    id?: string
    action: $Enums.PointActionType
    points: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LobbyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: LobbyParticipantUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: LobbyParticipantUncheckedUpdateManyWithoutLobbyNestedInput
  }

  export type LobbyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    status?: EnumLobbyStatusFieldUpdateOperationsInput | $Enums.LobbyStatus
    maxParticipants?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantUpdateWithoutUserInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lobby?: LobbyUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type LobbyParticipantUncheckedUpdateWithoutUserInput = {
    lobbyId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutUserInput = {
    lobbyId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PodcastUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemeUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readers?: ArticleReadUpdateManyWithoutArticleNestedInput
    likes?: ArticleLikeUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readers?: ArticleReadUncheckedUpdateManyWithoutArticleNestedInput
    likes?: ArticleLikeUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    readCount?: IntFieldUpdateOperationsInput | number
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutReadersNestedInput
  }

  export type ArticleReadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ArticleLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointActionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPointActionTypeFieldUpdateOperationsInput | $Enums.PointActionType
    points?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantCreateManyLobbyInput = {
    userId: string
    role?: $Enums.ParticipantRole
    joinedAt?: Date | string
  }

  export type LobbyParticipantUpdateWithoutLobbyInput = {
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLobbyParticipationNestedInput
  }

  export type LobbyParticipantUncheckedUpdateWithoutLobbyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LobbyParticipantUncheckedUpdateManyWithoutLobbyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumParticipantRoleFieldUpdateOperationsInput | $Enums.ParticipantRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadCreateManyArticleInput = {
    id?: string
    userId: string
    readAt?: Date | string
  }

  export type ArticleLikeCreateManyArticleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ArticleReadUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticleReadsNestedInput
  }

  export type ArticleReadUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleReadUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    readAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ArticleLikeUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleLikeUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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