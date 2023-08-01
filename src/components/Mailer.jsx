import React from 'react'
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export const Confirmation = () => {
    return (
        <Html>
            <Head />
            {/* <Preview>{previewText}</Preview> */}
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="logo-img w-[3rem] h-[3rem] bg-slate-800 flex justify-center items-center rounded-md">
                            <Text className='logo-img w-[3rem] h-[3rem] bg-slate-800 flex justify-center items-center rounded-md text-white text-[1.9rem] font-medium'>
                                e 
                            </Text>
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                        Join <strong>eshop</strong> on <strong>Vercel</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                        Hello Michael,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                        <strong>bukinoshita</strong> (
                        <Link
                            href='testemail'
                            className="text-blue-600 no-underline"
                        >
                            Test email
                        </Link>
                        ) has invited you to the <strong>teamName</strong> team on{' '}
                        <strong>Vercel</strong>.
                        </Text>
                        <Section>
                        <Row>
                            <Column align="right">
                            <Img className="rounded-full" src='/assets/logo.png' width="64" height="64" />
                            </Column>
                            <Column align="center">
                            <Img
                                src='/assets/logo.png'
                                width="12"
                                height="9"
                                alt="invited you to"
                            />
                            </Column>
                            <Column align="left">
                            <Img className="rounded-full" src='/assets/logo.png' width="64" height="64" />
                            </Column>
                        </Row>
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                        <Button
                            pX={20}
                            pY={12}
                            className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                            href='test'
                        >
                            Join the team
                        </Button>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                        or copy and paste this URL into your browser:{' '}
                        <Link
                            href='test'
                            className="text-blue-600 no-underline"
                        >
                            test
                        </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        {/* <Text className="text-[#666666] text-[12px] leading-[24px]">
                        This invitation was intended for{' '}
                        <span className="text-black">test </span>.This invite was sent from{' '}
                        <span className="text-black">{inviteFromIp}</span> located in{' '}
                        <span className="text-black">{inviteFromLocation}</span>. If you were not
                        expecting this invitation, you can ignore this email. If you are
                        concerned about your account's safety, please reply to this email to
                        get in touch with us.
                        </Text> */}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
