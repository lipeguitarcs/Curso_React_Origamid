import styled from "styled-components";

export const CongrateStyle = styled.div`
   height: 100%;
   width: 100%;
   background-color: var(--blue-pride);
   background-image: linear-gradient(302deg, transparent 72%, #14163d);
   font-family: Montserrat;

   .congrate-img{
     margin-right: 7px;
   }

   .justify-content-center{
    gap: 25px;
   }

   .heart{
    font-size 45px;
    height: 55px;
   }

    .congrate-content{
      position: relative;
      top: 20%;
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 20px;
    }
   .title-congrate{
    color:white;
    font-size: 2rem;
    font-weight: bold;
    font-family: "Montserrat";
    align-self: end;
    margin-bottom: 0;
   }

   .clap {
    
    max-width: 300px;

      img {
        width: 100%;
      }
   }

   .description{
     color:black;
     text-align:center;
     margin: 20px auto;
    font-size: 1.3rem;
    max-width: 500px;
    font-weight: bold;
    font-family: "Montserrat";
   }
`;