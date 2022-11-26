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

const NoneDiet = () => {
  return (
    <NoneStyle>
      <img src="\images\expiration.png" />
      <p>오늘은 식단 정보가 없습니다.</p>
    </NoneStyle>
  );
};

export default NoneDiet;
