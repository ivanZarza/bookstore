
import Heading from "../components/layouts/HeadingComponent";

function HomePage() {
  return <>
    <Heading level="h1" >H1</Heading>
    <Heading level="h2" >H2</Heading>
    <Heading level="h3" >H3</Heading>
    <Heading level="h4" >H4</Heading>
    <Heading level="h5" >H5</Heading>
    <Heading level="h6" title="pasando otra props">H6</Heading>
    </>;
}

export default HomePage;