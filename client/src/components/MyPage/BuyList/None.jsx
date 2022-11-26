import styled from "styled-components";

const NoneStyle = styled.div`
  img {
    transform: translate(75%, 10%);
    margin-top: 100px;
    width: 150px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #49663c;
  }
`;

const None = () => {
  return (
    <NoneStyle>
      <img src="\images\expiration.png" />
      <p>식권 정보가 없습니다.</p>
    </NoneStyle>
  );
};

export default None;
