import H3 from '~/components/H3';
import Li from '~/components/Li';
import Ul from '~/components/Ul';

export default function Goodoc() {
  return (
    <>
      <div className="mb-12">
        <H3>굿닥 v3 접수예약 관리시스템</H3>
        <Ul>
          <Li>모바일 병원 접수예약 관리를 위한 타임테이블의 시각화</Li>
          <Li>설정한 정보를 바탕으로 모바일 앱을통해 병원 예약</Li>
          <Li>복잡한 로직은 프론트에서 구현하고 api를 통해 데이터만 주고받음</Li>
        </Ul>
        <div className="grid grid-cols-2 gap-5 max-w-md:grid-cols-1">
          <div>
            <p className="my-3">스케쥴 직접 입력</p>
            <video width="100%" controls>
              <source src="/assets/images/projects/schedule_direct-input.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="my-3">스케쥴 대량 입력</p>
            <video width="100%" controls>
              <source src="/assets/images/projects/schedule_bulk-input.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="my-3">스케쥴 대량 삭제</p>
            <video width="100%" controls>
              <source src="/assets/images/projects/schedule_bulk-delete.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="my-3">스케쥴 월복사</p>
            <video width="100%" controls>
              <source src="/assets/images/projects/schedule_copy.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="my-3">접수 직접 입력</p>
            <video width="100%" controls>
              <source src="/assets/images/projects/local_direct-input.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <H3>굿닥 운영어드민 정적자원 업로드 자동화</H3>
        <Ul>
          <Li>
            운영팀이 담당하며 요청한 이벤트 이미지 및 배너를 s3에 예약시간에 맞춰 업로드하여
            자동화함
          </Li>
          <Li>반복작업 하는 시간개선</Li>
        </Ul>
      </div>
      <div className="mb-12">
        <H3>접수알림톡 페이지 마이그레이션 및 운영</H3>
        <Ul>
          <Li>{`레거시 접수알림톡 Angular -> React.JS 마이그레이션및 운영`}</Li>
          <Li>{`병원접수 -> 카카오톡 알림톡 -> 모바일화면`}</Li>
        </Ul>
        <div className="flex items-center justify-center">
          <img src="/assets/images/projects/goodoc-alarm-talk.png" alt="프로젝트 이미지" />
        </div>
      </div>
    </>
  );
}
