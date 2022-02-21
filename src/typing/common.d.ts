interface IRouterConfig {
    path: string;
    params?: string;
    component?: any; // 组件
    exact?: boolean;
    defualtRedirect?: string; // 如果有child，默认跳转到哪个
    child?: IRouterConfig[];
}

declare const WWWDOMAIN: string
