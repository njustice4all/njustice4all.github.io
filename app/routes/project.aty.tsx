import { Link } from '@remix-run/react';

import H3 from '~/components/H3';
import Li from '~/components/Li';
import Ul from '~/components/Ul';

export default function Aty() {
  return (
    <>
      <div className="mb-12">
        <H3>ATY Editor 컴포넌트 개발</H3>
        <Ul>
          <Li>
            <Link to="https://aty.kr/" target="_blank" rel="noreferrer">
              https://aty.kr/
            </Link>
          </Li>
          <Li>쇼핑몰빌더 통계페이지 구현</Li>
          <Li>에디터 이미지 슬라이더 개발</Li>
          <Li>쇼핑몰 카테고리/브랜드 트리메뉴 drag and drop 구현 쇼핑몰 쿠폰발급 기능</Li>
          <Li>야놀자 예약 달력페이지 개체 개발</Li>
        </Ul>
        <div className="grid grid-cols-2 gap-5 max-w-md:grid-cols-1">
          <img src="/assets/images/projects/aty/1.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/aty/2.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/aty/3.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/aty/4.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/aty/5.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <div className="mb-12">
        <H3>단골사장님</H3>
        <Ul>
          <Li>푸시메세지 주문관리 react native 앱</Li>
          <Li>배달,매장,포장 주문등을 푸시메세지로 관리</Li>
          <Li>FCM 푸시 메세지 react-native의 webview사용 code-push적용</Li>
          <Li>
            <Link
              className="mr-1"
              to="https://itunes.apple.com/us/app/%EB%8B%A8%EA%B3%A8%EC%82%AC%EC%9E%A5%EB%8B%98/id1358583165?l=ko&amp;ls=1&amp;mt=8"
              rel="nofollow"
              target="_blank"
            >
              iOS
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=kr.aty.bossapp&amp;hl=ko"
              rel="nofollow"
              target="_blank"
            >
              Android
            </Link>
          </Li>
        </Ul>
      </div>
      <div className="mb-12">
        <H3>단골사운드</H3>
        <Ul>
          <Li>
            주변에 특정 주파수가 들리면 해당 주파수를 갖고있는 상점정보를 팝업하여 보여주는
            react-native app
          </Li>
        </Ul>
      </div>
    </>
  );
}
