import {Button, Htag, P, Rating, Tag} from "@/components";
import {useEffect, useState} from "react";


export default function Home(): JSX.Element {
    //const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>counter</Htag>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x+1)}>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='s'>paragraph text</P>
            <P size='m'>paragraph text</P>
            <P size='l'>paragraph</P>
            <Tag size='s'> s tag</Tag>
            <Tag size='m' color='red'> s tag asfd</Tag>
            <Tag size='m' color='primary' href='https://google.com'> посилання на домашню гугла :)</Tag>
            {/*<Rating rating={4} isEditable/>*/}
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}
