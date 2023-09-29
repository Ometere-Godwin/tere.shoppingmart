interface AmountProps {
    amount: number;
}

export default function FormattedPrice({amount} : AmountProps) {
    const formattedAmount = new Number(amount).toLocaleString
    ('en-US', {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    })
  return (
    <span>
        {formattedAmount}
    </span>
  )
}
