import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.main.colors.won.blue};
  bottom: 0;
  .poweredBy {
    width: 100%;
    bottom: 16;
    height: 3rem;
    line-height: 3rem;
    background-color: rgba(255, 255, 255, 0.02);
    font-size: 1.4rem;
    padding-left: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.main.colors.strapi["gray-light"]};

    a {
      color: ${({ theme }) => theme.main.colors.won.orange};
      margin-bottom: 16px;
    }
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        strapi: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
