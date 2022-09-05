import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/ytc/AMLnZu-HukNYJH3iLwEXIsbBHu6_s957sGdRDQlA6tSl=s176-c-k-c0x00ffffff-no-rj' />
      <Details>
        <Name>
          John Doe<Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptates eos, a dignissimos illo dolore vero ab? Id, iure molestias?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
