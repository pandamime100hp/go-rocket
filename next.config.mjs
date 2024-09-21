/** @type {import('next').NextConfig} */
export const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist`.
}

export const images = {
    unoptimized: true,
};