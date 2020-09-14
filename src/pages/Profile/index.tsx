import React from 'react';

import { 
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () =>  (
    <div className="content">
      <RepoIcon />
      <span className="label"> Repositories </span>
      <span className="number"> 17 </span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        

        <span className="line" />
      </Tab>

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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={"Gabriel-J3sus"}
                  reponame={"Github-Clone"}
                  description={"Clone da interface do Github"}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={2}
                  forks={5}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          
          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;