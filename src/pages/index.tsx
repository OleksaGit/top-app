import { Button, Htag, P, Rating, Tag } from "@/components";
import { useState } from "react";
import { withLayout } from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";


function Home({ menu }: HomeProps): JSX.Element {
    //const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>counter</Htag>
            <Button appearance='primary' arrow='right' >Кнопка</Button>
            {/*<Button appearance='primary' arrow='right' onClick={() => setCounter(x => x+1)}>Кнопка</Button>*/}
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='s'>paragraph text</P>
            <P size='m'>paragraph text</P>
            <P size='l'>paragraph</P>
            <Tag size='s'> s tag</Tag>
            <Tag size='m' color='red'> s tag asfd</Tag>
            <Tag size='m' color='primary' href='https://google.com'> посилання на домашню гугла :)</Tag>
            {/*<Rating rating={4} isEditable/>*/}
            <Rating rating={rating} isEditable setRating={setRating}/>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 'Courses';
    const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory,
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: string;
}
