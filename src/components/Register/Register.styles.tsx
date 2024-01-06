import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  width: calc(100% - 20px);
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
`;
