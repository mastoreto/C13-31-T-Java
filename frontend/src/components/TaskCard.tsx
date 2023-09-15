import React from 'react';
import { Image, Card, CardHeader, CardFooter } from '@nextui-org/react';

type Props = {
    descripcion: string;
    image: string;
    fecha: string;
};

const TaskCard = (props: Props) => {
    return (
        <Card isFooterBlurred className="w-full h-[300px] sm:my-5 col-span-1 hover:scale-105 cursor-pointer mx-2">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">{props.descripcion}</h4>
            </CardHeader>
            <Image
                width={500}
                height={500}
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={props.image}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">{props.fecha}</p>
                </div>
                {/* <Button className="text-tiny" color="primary" radius="full" size="sm"></Button> */}
            </CardFooter>
        </Card>
    );
};

export default TaskCard;
