export interface SlackSendDemoFormResponseSuccess {
    channel: string;
    message: {
        app_id: string;
        blocks: [
            {
                type: string;
                block_id: string;
                elements: [
                    {
                        type: string;
                        elements: [
                            {
                                type: string;
                                text: string;
                            }
                        ];
                    }
                ];
            }
        ];
        bot_id: string;
        bot_profile: {
            id: string;
            app_id: string;
            name: string;
            icons: {
                image_36: string;
                image_48: string;
                image_72: string;
            };
            deleted: boolean;
            updated: number;
            team_id: string;
        };
        team: string;
        text: string;
        ts: string;
        type: string;
        user: string;
    };
    ok: boolean;
    ts: string;
}

export interface SlackSendDemoFormResponseFail {
    ok: boolean;
    error: string;
}

// export interface User {
//     email: string;
//     token: string;
//     username: string;
//     bio: string;
//     image: string;
// }

// export interface Profile {
//     username: string;
//     bio: string;
//     image: string;
//     following: boolean;
// }

// export interface Author {
//     username: string;
//     bio: string;
//     image: string;
//     following: boolean;
// }

// export type Tag = string;

// export interface Article {
//     slug: string;
//     title: string;
//     description: string;
//     body: string;
//     tagList: Tag[];
//     createdAt: string;
//     updatedAt: string;
//     favorited: boolean;
//     favoritesCount: number;
//     author: Author;
// }

// export interface Comment {
//     id: number;
//     createdAt: string;
//     updatedAt: string;
//     body: string;
//     author: Author;
// }

// export type ResponseType<K extends string, V> = Promise<{ [P in K]: V }>;

// export type ResponseTypes<T> = Promise<T>;

// export type OptionalPick<T, K extends keyof T> = Pick<Partial<T>, K>;

// export type Optional<T, K extends keyof T> = OptionalPick<T, K> & Omit<T, K>;

// export type CustomErrors = {
//     errors: {
//         errorName: string[];
//     };
// };
