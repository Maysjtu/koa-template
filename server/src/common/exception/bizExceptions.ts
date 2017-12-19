
/**
 * 业务异常抽象
 */
export abstract class BizException extends Error{

}

/**
 * 图形验证码失败
 */
export class CaptchaWrongException extends Error{

}

/**
 * 没有登录的情况下 使用需要登录的接口
 */
export class NeedLogin extends BizException{

}
