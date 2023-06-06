import { Paragraph } from "./styled";

export const Result = ({ result }) => {
    return (
        <Paragraph> 
            {result !== undefined && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </Paragraph>
    );
}