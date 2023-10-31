
export function CharacterCard(props: {name: string, img:string, alt: string}){
    return (
        <div>
        {props.name}
        </div>
    );
};

export function EmptyCard(){
    return (
        <div>

        </div>
    );
};

