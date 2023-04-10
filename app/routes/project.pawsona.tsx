import { Link } from '@remix-run/react';

import H3 from '~/components/H3';
import Li from '~/components/Li';
import Ul from '~/components/Ul';

export default function Pawsona() {
  return (
    <>
      <div className="mb-12">
        <H3>파우소나앱</H3>
        <Ul>
          <Li>
            <Link to="https://apps.apple.com/kr/app/pawsona/id1639495871" target="_blank">
              iOS - https://apps.apple.com/kr/app/pawsona/id1639495871
            </Link>
          </Li>
          <Li>
            <Link to="https://play.google.com/store/apps/details?id=kr.co.pawsona" target="_blank">
              Android - https://play.google.com/store/apps/details?id=kr.co.pawsona
            </Link>
          </Li>
          <Li>의약외품 간편결제, 본인인증, 주문배송</Li>
          <Li>배송, 컨텐츠, 커뮤니티 CRM</Li>
        </Ul>
        <div className="grid grid-cols-3 gap-4 max-w-md:grid-cols-1">
          <img src="/assets/images/projects/pawsona/pawsona2.jpeg" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/pawsona/pawsona3.jpeg" alt="프로젝트 이미지" />
          <img src="/assets/images/projects/pawsona/pawsona4.jpeg" alt="프로젝트 이미지" />
        </div>
      </div>
    </>
  );
}
