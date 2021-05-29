import styled from 'styled-components'

export const Wrapper = styled.div`
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 400;
  }

  .form-card {
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    .input-num {
      width: 100%;
      border-style: none;
      border: 1px solid rgb(204, 204, 204);
      outline: none !important;
      height: 40px;
      border-radius: 5px;
      box-shadow: none !important;
      & :active,
      :focus {
        border: 2px solid blue;
      }
    }

    .select {
      margin-top: 10px;
    }

    p {
      font-size: 1rem;
    }

    button {
      background: linear-gradient(180deg, #fff, #ffcc91);
      border: 2px solid #d38558;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0, 25);
      border-radius: 10px;
      height: 40px;
      margin: 20px 0;
      padding: 0 40px;
    }
  }
`
