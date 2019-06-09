import styled from 'styled-components';

const PostNavigation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .right {
      justify-self: end;
      text-align: right;
    }
`;

export default PostNavigation;