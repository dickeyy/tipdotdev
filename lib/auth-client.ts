import { anonymousClient, magicLinkClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    plugins: [anonymousClient(), magicLinkClient()]
});

export const { signIn, signUp, useSession } = createAuthClient();
