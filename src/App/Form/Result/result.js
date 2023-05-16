import "../style.css"

export const Result = ({ result }) => {
    return (
        <p className="form__paragraph form__paragraph--result"> 
            {result !== undefined && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
        </p>
    );
}