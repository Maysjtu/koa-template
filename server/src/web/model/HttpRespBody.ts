import { RespStatusCode } from '../../common/define';

/**
 * http响应body模型
 */
export default class HttpRespBody {
    statusCode: number;
    message: string;
    data: object;

    constructor(code: number, msg: string, data: object) {
        this.statusCode = code;
        this.message = msg;
        this.data = data;
    }

    static success(data: object): HttpRespBody {
        return new HttpRespBody(RespStatusCode.SUCCESS, "OK", data);
    }
}