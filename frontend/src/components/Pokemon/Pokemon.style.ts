import styled from 'styled-components';

export default {
  Wrapper: styled.div`
  position: relative;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px double black;
  font-size:12px;
  width: 225px;
  margin: 10px;
  padding: 10px;
  `,
  switchIcon: styled.div`
  position:absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  `,
};
