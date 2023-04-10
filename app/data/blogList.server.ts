// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
  slug: string;
  title: string;
  publishDate: string;
  description: string;
  pathName: string;
}

export const blogList: Array<BlogList> = [
  {
    slug: 'react-native-large-image',
    title: 'react native에서 긴 이미지 처리',
    publishDate: '2023-04-10',
    description: 'react native 안드로이드에서 길이가 긴 이미지를 처리할때 리사이징된다',
    pathName: '/blog/react-native-large-image',
  },
  {
    slug: 'kakao-blind',
    title: '2018 카카오 블라인드채용',
    publishDate: '2019-04-08',
    description: '2018 카카오 블라인드채용 1단계 풀이',
    pathName: '/blog/kakao-blind',
  },
  {
    slug: 'javascript-recursion',
    title: 'recursion',
    publishDate: '2019-04-08',
    description: '자바스크립트 재귀호출',
    pathName: '/blog/javascript-recursion',
  },
  {
    slug: 'docker-mongodb',
    title: 'Docker - MongoDB 연결',
    publishDate: '2019-04-08',
    description:
      '이전에 작성했던 node-express-mongodb에서 데이터베이스 부분만 따로 떼어내서 Docker에서 구동시켜보자... 로컬에 설치되어있던 MongoDB는 삭제하자',
    pathName: '/blog/docker-mongodb',
  },
  {
    slug: 'node-express-mongodb-flow-3',
    title: '[NODE] NODE+EXPRESS+MONGODB 회원가입 FLOW #3',
    publishDate: '2019-01-24',
    description:
      '많이쓰는 node express mongodb 조합으로 회원가입과 github인증등을 구현. 첫번째로는 프로젝트의 구조등을 설정함.',
    pathName: '/blog/node-express-mongodb-flow-3',
  },
  {
    slug: 'node-express-mongodb-flow-2',
    title: '[NODE] NODE+EXPRESS+MONGODB 회원가입 FLOW #2',
    publishDate: '2019-01-23',
    description:
      '많이쓰는 node express mongodb 조합으로 회원가입과 github인증등을 구현. 첫번째로는 프로젝트의 구조등을 설정함.',
    pathName: '/blog/node-express-mongodb-flow-2',
  },
  {
    slug: 'node-express-mongodb-flow-1',
    title: '[NODE] NODE+EXPRESS+MONGODB 회원가입 FLOW #1',
    publishDate: '2019-01-22',
    description:
      '많이쓰는 node express mongodb 조합으로 회원가입과 github인증등을 구현. 첫번째로는 프로젝트의 구조등을 설정함.',
    pathName: '/blog/node-express-mongodb-flow-1',
  },
];
