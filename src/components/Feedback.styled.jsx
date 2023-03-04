import  styled  from "@emotion/styled";

export const SectionStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
        margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-align: center;
    background-color: #e4e3e3;
    width: 600px;
    font-family: 'Roboto', sans-serif;
    border-radius: 6px;
    box-shadow:
      0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
      margin-top: 40px;
      margin-bottom: 40px;
      
      &:hover{
    scale: 1.05;
}
`
export const ButtonStyled = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
  cursor: pointer;
  border-color: transparent;
    &:hover {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
}

`

export const StatisticsStyled = styled.p`
  font-size: 24px;
    display:block;
    margin: 10px;
    text-align: center;
    flex-wrap: wrap;
    padding: 20px 20px;
    background-image: linear-gradient(45deg, #61e8ec 0%, #3bf1bb 50%, #006678 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  transition: .5s;
  color: white;
  border-radius: 10px;
  &:hover {
  box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
  background-position: 0 0;
}
`