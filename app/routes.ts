import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth','routes/auth.tsx'),
    route('/upload','routes/upload.tsx'),
    route('/resume/:id','routes/resume.tsx'),
    route('/wipe','routes/wipe.tsx'),
    route('/privacy-policy','routes/privacy-policy.tsx'),
    route('/terms-of-service','routes/terms-of-service.tsx'),
] satisfies RouteConfig;
