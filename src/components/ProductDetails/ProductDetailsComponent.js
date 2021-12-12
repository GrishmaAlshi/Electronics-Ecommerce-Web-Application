import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import {Carousel} from "react-bootstrap";
import { mobile } from "../responsive";
import {useDispatch} from "react-redux";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 50vh;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight:700;
    color: black;
`;
const Desc = styled.p`
    color: white;
    margin: 20px 0px;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight:400;
    color: white;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 400;
  color:white;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size:14px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: white
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid white;
  background-color: black;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: grey;
  }
`;

const Reviews = styled.div`
  
`;

const heading = styled.head`
  width: 100%
`;

const styles = {

    largeIcon: {
        width: 60,
        height: 60,
    },

};
const ELECTRONICS_API = "http://localhost:4000/api/electronics";

const ProductDetailsComponent = (item) => {
    console.log(`${ELECTRONICS_API}/item`);
    // const electronics = useSelector(selectAllElectronics);
    // const dispatch = useDispatch();
    // useEffect(() => fetchAllElectronics(dispatch), []);
    const [electronics, setElectronics] = useState([]);

    // electronics = useSelector(selectAllElectronics);
    const dispatch = useDispatch();
    // useEffect(() => fetchAllElectronics(dispatch), []);
    useEffect(() =>
             fetch(`${ELECTRONICS_API}/item`
                  ).then(response => response.json())
        , []);
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhUTBxMVFhIWGB8WFhUYGRoVGxccHR0XIhcdHhcaHSghGxwmHBYYITcjJSkrMC4uGx8zOD8vOy4tLisBCgoKDg0OGxAQGi0fICU1LS0tLS0tLS8tLS0tLS0tLS0tLS0rLjUtLTUtKy0tLS0tLi0tLS0uLS0rKy0tLS0rLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA+EAACAQIFAQUFBgMGBwAAAAAAAQIDEQQFEiExQQYTIlFhMnGBkaEUI0JSsfAHFYKSosHR4fEzNERTY3PC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAIhEBAAICAgICAwEAAAAAAAAAAAECAxESMQQhQVEiYZET/9oADAMBAAIRAxEAPwC7AAuecAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pV5cFYzntJXyrGQVTDp0akVOFRynBWl7Kv3bWq1na6te3QscsF/Nq32fVpjKLlUkukPL3ye3qlPyNmrkMMVlMcPnlWVdJ7Penp5tZRlfZO3LGpnpOJrWN2UzDdvKdV/e4eurbNp05JP4zT+hI0e12Fq1VGXfRm1qUZUKqdvPaDSXqRuA7DwwXaDTgKuzbspeKVJWbbvpS9Lvfgksf2jwnZqTp5NQlWq8urtaT/9jeqo9/wprk5PKva2tcd43DbpZ/hKtXTHEUtX5XNRl/ZlZkhTqKqr0mmvR3/Q5bnWfYjPJas2s4J3jTcVpi+FZX3fTr9SGqYSnR8Uo6JN/hXdv19k5uT/AAj4l20HKOz9HFYyu/sVfExiv/LOSS6K0rpy+hLyxWZYWpajiHLZ7VIU6jdvKNOKk16ktozhn7dABVuyua47G5hKnm8aOmMFNuF1JOTtBNamk3pm7beyWkRKu1ZrOpAAEQAAAAAAAAAAAAAAAAAAAAAAAAAADzUqKlTcqrtFJtt9EuWeir9t84+x4dUqO85eJrna/huvJyXyi11CVa8p0sGRZtBYOU6l9VSV7cOPKinfdWiumzbk+p8WY68WlHno5P8AzKXkmLmoaMTCTkrS1t3Um0rJL04/d3t18Y6lROgrJcp9H5GvDETDH5W630mM8UMZl8lio03u3KNu7k994txd3Hp0KRje1FamnCvTioLaKprTtvtb3devzvZqteWMv3rd9O19/h9CqZvh06rcf9vP6/qdyYYn2YPJtX1PSNp5tCbbxKkpfhv4kvV2W8jdwcaWIqxnWlecnaMW/E3fbZbLz9Pq4ivh7vgwUqcqOIU6TtKPsu17fD6GeaTD0KZ4l1vI8qp4DLYqutUutt7tvpbZR97MWcZpHLMFKWFhFKC06nOMV7vOyb3+JS8DnjxM9PXaO7tblzlZ7vbSl0T1N3SJWhhI51ntGi3Jxh97Vi7tQhC2mO65lPSreWrkjPXpdtbuzeHlSy1TxatVq/eTW/hukoR3f4YKKfqpPqSge4Islp3OwABwAAAAAAAAAAAAAAAAAAAAAAAAAAGLFYiOEw0qmJdoQi5SfkkrsoE6sZZlLEYmT1y8UknfTFLaKadmknGNr+Jt+pccynDG4OcJJSi1JO61wdrX1xj4kr23ta25U8x7FYWrTdTKHWw0072i1Wotp+fRLye5CbNWLHqNylZZdQrRU8Ut5S71wgpbPiN9Lukr2Xp8T1mGV0MJScaVSbxDaUYNxtJtana+6Si7XvzZFa+043K6rljqSxEW795RdmrKybpvlLyTRJ5PnuDzDtLCrUq+KFNRjTrLu5KXicnZ7PlLZvgnS+uncmKt41aGJYl0KrVdNOOzi9mvg+COryhXn1Rbe2OWa8M68dKm3d72vF3tzy1bp0KNpainbng30ycoePkwzjtphxVF0Z2kazsuCSxibSk09PDuuH5GljaPdSvDh/QjaEqS1Jy0O8XZrh9V8TpP8PsBKjk7r4reriHrvaz7tX7v53cv6jn2WZa85zSnQXE5eNrpBb1H/Z2Xq0dojFQilBWSVkl0S4Rlv221tPB9ABBEAAAAAAAAAAAAAAAAAAAAAAAAAAA1cwxCoUkpS0uTtq/KusvS3n5tG0VKvnP2jHSlhpJpeFQa5ivxJ8rU9777aTlp1C3FTlZK4qp0rRTSikpQutKbtdq9+Fslf6mtOfeVdWHepuUrO+ieySvKceUnbwtdVci6eOjGXgfdvU5OPMHp2SUeJPbpvt7rY6+LX/VRalpbcot+Jy4Ta4XOz23Kmxt1MSpNd4rt2s9qVSV+WreCf0InMsuo5jtWjCbu1pmlCd1yk+JP3MyYjEuVOWtqotMU5KysuqS4b39OUadaup7UnsnaNOW63tqel8cdNtgI+pg6+XLRga84w/7Fb7yns9tKlxvbeNiMxGYVsL/z9Ha/tU94782XRE68W6MdMm9MVZxku9i5dOd47eW12MNjVhcSp0opeF6o2VanKL23um47ryaVidMlq9K8mKt4/KGnh8+jmGHUYyi2vhJ28+pjxyvSvHj9CQzXD4HNsLKdXDOFW14zoPwyfwuv09xX8DlWJxdZQyypKcXKMWpLU4KTspN+SL48jfcMk+Hr3Wf6vf8ADTLNNCpiaq3m+7p+kYvxv+qat/Qi7mDA4SOAwUKWHVoU4qEfclb5mch37cn9AAOOAAAAAAAAAAAAAAAAAAAAAAAAAB8lJQi3J2S3b8gIntNjlhsDoTtKpeO3Kj+J/W3xKNiKEoq8PEultmvX/Y85vnX8zzSU4+x7MF5RXHz5+Io4sqtO5bcdeNWOWKtdJqcd4xfDt1dn/j6COKbf3LutS8Dvd+XquP0PeIpRxSutn5rn5dV/kRGJhKg7z3X5l+9jixvPEKclpemTbb8tuFbh/wCnQxVcS5/8de09WpeXml04SI77TtaaukrJcPfj3nlVrPwO+3UDelWap+B3jq2T5fx59TFUrJ6r3jJu1lt7722fuNNVVdadn5/vk8Sr+FqW9/3x7rAbsqk6dp2aVraoeF+l2tm/R/4nTuxeBeHynvMVFd9U8TnZJuFloV103b9bryObdl8u/nGc06V3pb1VLdIx3fue23q0dpforLolwl0ROsKc1tRp8ABNkAAAAAAAAAAAAAAAAAAAAAAAAAAAIntTha2OyOpTy22uSs03bVH8UU+ja23JYB2J1O3DJasPWcK6cZRdnFqzT9UZ4YjY6p2h7OUc9o/frTUS8NRcr0f5o+j+FjlWe5PXyHFacbHwv2ZreMvc/P0e/wCpXNdNlMkWbtPFWWxkdZT5IKniTPHEEVjNicFGTvT2f91/DoRtanKm/Hs728k/c/ob7xGx5nVU42kBG1ptSae/z972e/keITd7x3tu77r6meth7L7njyfTzs+fL5HnLcC8yzOlRoq05yS35S6u1t7JN3vwgOm/wwyv7PlksRVXiqu0fSCe/wA5L+4i6GLC4eOEw0adBWhCKjFeiVkZS2I1DDe3K2wAHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMOMwlPHYZ08ZFThLmL/ez9TMAOUdrOw9TK71cr1VKPLXM6a9V+KPqt118ynxrWP0OUntd2DhmV6uUaadblw4hUf/AMy9Vs+vmQmv000zfFnM41dtz73xr4ujPBYl08ZFwqR2cZbNf6evDMPeEGhuusXz+FuWd7Xniaq2j93D3u2t/Kyv6s5xSUq9aMKCvKTUYrzbdl9Wd+yLLY5RlNOjT/BGzfnLmT+LuSrHtVmtqum+ACxjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjR9AEL2k7OUO0OG042PiXsVI7Th7n1Xo9jjXaXs5X7O4i2LWqm/Yqx9mXo/yy9H8Lnf7GrjsDDHYdwxKUoSVnFpNP5nJrtbTJNXKP4UZR9uzp16y8FBeH1qS4+Ubv4o7CReQ5HSyLB91gVaN3Ld3bb82yUQiNQ5kvynYADqsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
                                alt="First slide">
                            </Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="data:image/jpeg;base64,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"
                                alt="Second slide">
                            </Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="data:image/jpeg;base64,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"
                                alt="Third slide">
                            </Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmV05gejtaeZ0mqkeHOISm1ZQSJYztkjHLyg&usqp=CAU"
                                alt="Third slide">
                            </Image>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpo_MWOuHIe7IYCQhibtY_yhieejIm-UVBg&usqp=CAU"
                                alt="Third slide">
                            </Image>
                        </Carousel.Item>
                    </Carousel>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {electronics.model_name}
                    </Title>
                    <Desc>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Desc>
                    <Price>$570</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="white" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ color: 'white'}}/>
                            {/*<i className="fa fa-minus 2x" style={{'color' : 'black'}}></i>*/}
                            <Amount>1</Amount>
                            {/*<i className="fa fa-plus 2x mt-2" style={{'color' : 'black'}}></i>*/}
                            <Add style={{ color: 'white', marginRight: '10px'}}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <heading>Reviews</heading>
            <Reviews>
                <ul className="list-group">
                    <li className="list-group-item">Very good</li>
                    <li className="list-group-item">Good</li>
                    <li className="list-group-item">LOVED THE QUALITY</li>
                </ul>
            </Reviews>
        </Container>
    )};

export default ProductDetailsComponent;