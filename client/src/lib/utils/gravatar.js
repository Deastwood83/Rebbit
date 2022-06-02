import md5 from 'md5';

export const getGravatarUrl = (email, size = 200) => {
    // Generate Gravatar URL
    return `https://www.gravatar.com/avatar/${md5(
        email
    )}?s=${size}&d=identicon`;
};
