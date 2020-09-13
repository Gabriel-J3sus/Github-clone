import React from 'react';

import { 
  Container,
  Main,
  LeftSide,
  RightSide,
} from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'Gabriel-J3sus'}
            name={'Gabriel Araújo de Jesus'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/60709667?v=4'}
            followers={899}
            following={44}
            company={'Google'}
            location={'São Paulo, Brazil'}
            email={'gabr.jesus001@gmail.com'}
            blog={'undefined'}

          />
        </LeftSide>

        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;