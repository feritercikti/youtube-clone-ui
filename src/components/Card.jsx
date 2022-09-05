import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '100px' : '202px')};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src='https://img.youtube.com/vi/5N8NSLWE_yo/0.jpg' />
        <Details type={type}>
          <ChannelImage
            type={type}
            src='https://yt3.ggpht.com/ytc/AMLnZu-HukNYJH3iLwEXIsbBHu6_s957sGdRDQlA6tSl=s176-c-k-c0x00ffffff-no-rj'
          />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>Channel</ChannelName>
            <Info>555,546 views ● 2 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
