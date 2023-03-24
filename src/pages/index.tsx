import {Button, Htag, P, Tag} from "@/components";


export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='s'>paragraph text</P>
            <P size='m'>paragraph text</P>
            <P size='l'>paragraph</P>
            <Tag size='s'> s tag</Tag>
            <Tag size='m' color='red'> s tag asfd</Tag>
            <Tag size='m' color='primary' href='https://google.com'> посилання на домашню гугла :)</Tag>
        </>
    );
}
