export default {
  files: './components/**/*.{md,markdown,mdx}', // 识别的文件后缀
  dest: 'doc-site', // 打包出来的文件目录名
  title: 'mj-design', // 站点标题
  base: '/mj-design',
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
};