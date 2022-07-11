import {Box, Text, Title} from "@mantine/core";
import {useEffect, useState} from "react";
import dayjs from 'dayjs';

function padZero(val) {
    if (val === null) return '--';
    return val.toString().padStart(2, '0');
}

function Timer({target}) {
    const separatorSx = (theme) => ({ fontFamily: theme.fontFamily, color: theme.colors.gray[5] });

    const [timeLeft, setTimeLeft] = useState({ h: null, m: null, s: null });

    useEffect(() => {
        const intervalId = setInterval(() => {
            let dt = target.diff(dayjs(), 'seconds');
            const h = Math.floor(dt / 3600);
            dt %= 3600;
            const m = Math.floor(dt / 60);
            const s = dt % 60;

            setTimeLeft({h, m, s});
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {padZero(timeLeft.h)}<Text component="span" sx={separatorSx}>:</Text>
            {padZero(timeLeft.m)}<Text component="span" sx={separatorSx}>:</Text>
            {padZero(timeLeft.s)}
        </>
    );
}

export default function CountDown({target}) {
    // Convert to dayjs object
    target = dayjs(target || new Date);

    const titleSx = (theme) => ({ color: theme.colors.gray[5] });
    const valueSx = (theme) => ({ fontFamily: theme.headings.fontFamily, lineHeight: 1 });

    return (
        <Box style={{textAlign: 'right'}} className="countdown-widget">
            <Title order={5} sx={titleSx}>Countdown</Title>
            <Text sx={valueSx} className="countdown-value">
                {
                    target.isBefore(dayjs()) ? <span>Expired</span> : <Timer target={target} />
                }
            </Text>
        </Box>
    );
}