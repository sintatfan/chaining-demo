import {Box, Text, Title} from "@mantine/core";

export default function GlobalTimer() {
    const titleSx = (theme) => ({ color: theme.colors.gray[5] });
    const valueSx = (theme) => ({ fontFamily: theme.headings.fontFamily, lineHeight: 1 });
    const separatorSx = (theme) => ({ fontFamily: theme.fontFamily, color: theme.colors.gray[5] });

    return (
        <Box style={{textAlign: 'right'}}>
            <Title order={5} sx={titleSx}>Countdown</Title>
            <Text sx={valueSx} className="countdown-value">
                11<Text component="span" sx={separatorSx}>:</Text>
                36<Text component="span" sx={separatorSx}>:</Text>
                25
            </Text>
        </Box>
    );
}