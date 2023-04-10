import H3 from '~/components/H3';
import Li from '~/components/Li';
import Ul from '~/components/Ul';

export default function Odoctor() {
  return (
    <>
      <div className="mb-12">
        <H3>비대면 진료 서비스</H3>
        <Ul>
          <Li>
            <a href="https://odoctor.co.kr/philing" target="_blank" rel="noreferrer">
              오닥터 페이지 이동
            </a>
          </Li>
          <Li>비대면 진료 환자를 위한 서비스</Li>
          <Li>현재 진료상태 확인, 약배송, 비대면 진료후 조제약 약국 직접수령, 진료비결제등</Li>
        </Ul>
        <div className="grid grid-cols-4 gap-4 max-w-md:grid-cols-2">
          <img src="/assets/images/projects/odoctor/15.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/13.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/14.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/16.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <div className="mb-12">
        <H3>비대면 진료용 병원 프로그램</H3>
        <Ul>
          <Li>비대면 진료 접수/관리를 위한 병원용 Electron 클라이언트</Li>
          <Li>업데이트 자동화, 소켓통신, 푸시알림</Li>
        </Ul>
        <div className="grid grid-cols-4 gap-4 max-w-md:grid-cols-2">
          <img src="/assets/images/projects/odoctor/4.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/5.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/6.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/7.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <div className="mb-12">
        <H3>파트너 어드민, 운영 어드민</H3>
        <Ul>
          <Li>병원용 이벤트 스케쥴 예약 CRM 개발</Li>
          <Li>내부 직원용 운영어드민 개발</Li>
        </Ul>
        <div className="grid grid-cols-2 gap-4 max-w-md:grid-cols-1">
          <img src="/assets/images/projects/odoctor/9.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/10.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/8.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/11.png" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/odoctor/12.png" alt="프로젝트 이미지" />
        </div>
      </div>
      <div className="mb-12">
        <H3>오닥터 서비스 v2</H3>
        <Ul>
          <Li>이벤트 페이지 SEO를 위한 SSR 적용</Li>
          <Li>Elastic Beanstalk, CircleCI 빌드배포, 인스턴스 scale 자동화</Li>
        </Ul>
      </div>
      <div className="mb-12">
        <H3>오닥터 이벤트 스케쥴 예약</H3>
        <Ul>
          <Li>이벤트 스케쥴 내원일 예약관리 시스템</Li>
          <Li>서버 개발자 없이 Firebase사용하여 개발</Li>
        </Ul>
      </div>
    </>
  );
}
