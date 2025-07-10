import { IHttpResponseJson } from "./http-response-json";

enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

/** */
export const ok = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.OK,
    body: data,
  };
};

/** */
export const created = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body: data,
  };
};

/** */
export const noContent = async (): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.NO_CONTENT,
    body: null,
  };
};

/** */
export const badRequest = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: data,
  };
};

/** */
export const unauthorized = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.UNAUTHORIZED,
    body: data,
  };
};

/** */
export const forbidden = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.FORBIDDEN,
    body: data,
  };
};

/** */
export const notFound = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.NOT_FOUND,
    body: data,
  };
};

/** */
export const conflict = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.CONFLICT,
    body: data,
  };
};

/** */
export const internalServerError = async (data: any): Promise<IHttpResponseJson> => {
  return {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    body: data,
  };
};