import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITY,
  SHADOWS,
  SPACING,
  TRANSITIONS,
  Z_INDEX,
} from "../constants/theme"
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
  FiYoutube,
} from "react-icons/fi"
import { PageSubtitle, PageTitle } from "./shared/SharedStyles"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRef, useState } from "react"

import ReCAPTCHA from "react-google-recaptcha"
import { RiTwitterXFill } from "react-icons/ri"
import emailjs from "@emailjs/browser"
import styled from "styled-components"
import { useThemeStore } from "../store/themeStore"

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

const ContactSection = styled.section`
  padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`

const ContactContainer = styled.div`
  max-width: ${BREAKPOINTS.MISC};
  margin: 0 auto;
  position: relative;
  z-index: ${Z_INDEX.BASE};
`

const BackgroundDecoration = styled.div<{ $isDarkMode: boolean }>`
  position: absolute;
  top: -50%;
  left: -20%;
  width: 80%;
  height: 200%;
  background: ${({ theme }) => theme.secondary};
  transform: rotate(35deg);
  z-index: ${Z_INDEX.BACKGROUND};
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? OPACITY.LOW : OPACITY.HIGH)};
`

const Form = styled.form`
  display: grid;
  gap: ${SPACING.LARGE};
  background: ${({ theme }) => theme.glass};
  padding: ${SPACING.LARGE};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.MEDIUM};
    gap: ${SPACING.MEDIUM};
    width: 100%;
  }
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${SPACING.LARGE};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;
    gap: ${SPACING.MEDIUM};
  }
`

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 78px;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    min-height: 70px;
    width: 100%;
  }
`

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  padding-left: ${SPACING.XLARGE};
  background: ${({ theme }) => theme.background};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.border)};
  border-radius: ${BORDER_RADIUS.SMALL};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.BASE};
  transition: all 0.2s;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.XSMALL} ${SPACING.MEDIUM};
    padding-left: ${SPACING.LARGE};
    font-size: ${FONT_SIZES.SMALL};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: ${SHADOWS.MEDIUM};
  }
`

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  padding-left: ${SPACING.XLARGE};
  background: ${({ theme }) => theme.background};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? "red" : theme.border)};
  border-radius: ${BORDER_RADIUS.SMALL};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.BASE};
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    min-height: 120px;
    padding: ${SPACING.XSMALL} ${SPACING.MEDIUM};
    padding-left: ${SPACING.LARGE};
    font-size: ${FONT_SIZES.SMALL};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent};
    box-shadow: ${SHADOWS.MEDIUM};
  }
`

const Icon = styled.div`
  position: absolute;
  left: ${SPACING.SMALL};
  top: ${SPACING.SMALL};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.LOW};
  margin-right: ${SPACING.SMALL};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    top: ${SPACING.XSMALL};
    left: ${SPACING.XSMALL};
    font-size: ${FONT_SIZES.SMALL};
  }
`

const MessageIcon = styled(Icon)`
  top: ${SPACING.SMALL};
  transform: none;
`

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: ${BORDER_RADIUS.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.LARGE};
  font-size: ${FONT_SIZES.BASE};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${SPACING.SMALL};
  transition: ${TRANSITIONS.DEFAULT};
  margin-top: ${SPACING.MEDIUM};

  &:hover {
    transform: translateY(-2px);
    xbox-shadow: ${SHADOWS.MEDIUM};
  }

  &:disabled {
    opacity: ${OPACITY.MEDIUM};
    cursor: not-allowed;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-top: 0;
  }
`

const ErrorMessage = styled.span`
  color: red;
  font-size: ${FONT_SIZES.XSMALL};
  margin-top: ${SPACING.SMALL};
  display: block;
  min-height: ${SPACING.SMALL};
`

const ContactInfo = styled.div`
  margin-top: ${SPACING.LARGE};
  padding: ${SPACING.LARGE};
  background: ${({ theme }) => theme.glass};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.MEDIUM};
    margin-top: ${SPACING.MEDIUM};
  }
`

const ContactInfoTitle = styled.h2`
  font-size: ${FONT_SIZES.XXXLARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.SMALL};
  text-align: center;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.XXLARGE};
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SPACING.LARGE};
  justify-content: center;
  margin-bottom: ${SPACING.LARGE};

  @media (max-width: ${BREAKPOINTS.INTERMEDIATE}) {
    flex-direction: column;
    gap: ${SPACING.MEDIUM};
    max-width: ${BREAKPOINTS.MISC};
    margin-left: auto;
    margin-right: auto;
  }
`

const ContactItem = styled.button`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.MEDIUM};
  padding: ${SPACING.LARGE};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  transition: ${TRANSITIONS.DEFAULT};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.accent}25;
  background: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(2px);
    box-shadow: ${SHADOWS.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.MEDIUM};

    &:hover {
      transform: none;
    }
  }
`

const ContactLabel = styled.span`
  font-size: ${FONT_SIZES.SMALL};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.MEDIUM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`

const ContactValue = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACING.LARGE};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.BASE};

  svg {
    font-size: ${FONT_SIZES.LARGE};
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.BASE};

    svg {
      font-size: ${FONT_SIZES.MEDIUM};
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.LARGE};
`

const SocialLinksLabel = styled.span`
  font-size: ${FONT_SIZES.SMALL};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.MEDIUM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${SPACING.LARGE};
  flex-wrap: wrap;
  max-width: ${BREAKPOINTS.MISC};
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    gap: ${SPACING.SMALL};
  }
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.LARGE};
  transition: ${TRANSITIONS.DEFAULT};
  padding: ${SPACING.LARGE};
  background: ${({ theme }) => theme.background}15;
  border-radius: ${BORDER_RADIUS.MEDIUM};
  border: 1px solid transparent;

  svg {
    display: block;
    color: ${({ theme }) => theme.accent};
  }

  &:hover {
    background: ${({ theme }) => theme.background}25;
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.accent}40;
    box-shadow: ${SHADOWS.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.LARGE};
    padding: ${SPACING.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.LARGE};
    padding: ${SPACING.MEDIUM};
  }
`

const RecaptchaWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: ${SPACING.MEDIUM};
  max-height: 76px;
  max-width: 302px;

  > div {
    border-radius: 3px;
    overflow: hidden;
    box-shadow: ${SHADOWS.SMALL};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    transform: scale(0.75);
    transform-origin: center;

    margin: 0 -13px; // Compensate for scale
  }
`

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.LARGE};
  background: ${({ theme }) => theme.glass};
  padding: ${SPACING.XLARGE};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  text-align: center;
  max-width: ${BREAKPOINTS.MISC};
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: ${SPACING.LARGE};
    gap: ${SPACING.MEDIUM};
  }
`

const SuccessTitle = styled.h2`
  font-size: ${FONT_SIZES.XXLARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.SMALL};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.XLARGE};
  }
`

const SuccessMessage = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.HIGH};
  line-height: ${LINE_HEIGHTS.LARGE};
  max-width: 600px;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.BASE};
  }
`

const ResetButton = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: ${BORDER_RADIUS.SMALL};
  padding: ${SPACING.MEDIUM} ${SPACING.LARGE};
  font-size: ${FONT_SIZES.BASE};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${SPACING.SMALL};
  transition: ${TRANSITIONS.DEFAULT};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${SHADOWS.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.XSMALL} ${SPACING.XSMALL};
    font-size: ${FONT_SIZES.SMALL};
  }
`

const FormError = styled.div`
  color: red;
  font-size: ${FONT_SIZES.SMALL};
  text-align: center;
  margin-top: ${SPACING.SMALL};
`

export function Contact() {
  const { isDarkMode } = useThemeStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>()

  const handleReset = () => {
    setIsSuccess(false)
    reset()
    recaptchaRef.current?.reset()
    setRecaptchaToken(null)
  }

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    if (!recaptchaToken) {
      setSubmitError("Please complete the reCAPTCHA")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const trimmedData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() : value,
        ])
      )

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${trimmedData.firstName} ${trimmedData.lastName}`,
          from_email: trimmedData.email,
          phone: trimmedData.phone || "Not provided",
          message: trimmedData.message,
          to_name: "Drew",
          reply_to: trimmedData.email,
          "g-recaptcha-response": recaptchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setIsSuccess(true)
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.")
    }
    setIsSubmitting(false)
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
  }

  return (
    <ContactSection>
      <BackgroundDecoration $isDarkMode={isDarkMode} />
      <ContactContainer>
        <PageTitle>Reach Out!</PageTitle>
        <PageSubtitle>
          I'm always interested in hearing about new opportunities and
          connections.
        </PageSubtitle>

        {isSuccess ? (
          <SuccessContainer>
            <SuccessTitle>Thank You!</SuccessTitle>
            <SuccessMessage>
              Thanks for reaching out! I'll be sure to get back to you as soon
              as possible. I typically respond within 24-48 hours, but feel free
              to reach out again if you haven't heard from me using one of the
              items below.
            </SuccessMessage>
            <ResetButton onClick={handleReset}>
              Send Another Message
            </ResetButton>
          </SuccessContainer>
        ) : (
          <>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormRow>
                <FormGroup>
                  <Icon>
                    <FiUser />
                  </Icon>
                  <Input
                    placeholder="First Name *"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: { value: 2, message: "Name is too short" },
                      validate: (value) =>
                        value.trim() !== "" || "First name cannot be empty",
                    })}
                    $hasError={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                  )}
                </FormGroup>
                <FormGroup>
                  <Icon>
                    <FiUser />
                  </Icon>
                  <Input
                    placeholder="Last Name *"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: { value: 2, message: "Name is too short" },
                      validate: (value) =>
                        value.trim() !== "" || "Last name cannot be empty",
                    })}
                    $hasError={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <Icon>
                    <FiMail />
                  </Icon>
                  <Input
                    type="email"
                    placeholder="Email *"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                      validate: (value) =>
                        value.trim() !== "" || "Email cannot be empty",
                    })}
                    $hasError={!!errors.email}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
                </FormGroup>
                <FormGroup>
                  <Icon>
                    <FiPhone />
                  </Icon>
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    {...register("phone", {
                      pattern: {
                        value:
                          /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    $hasError={!!errors.phone}
                  />
                  {errors.phone && (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                  )}
                </FormGroup>
              </FormRow>
              <FormGroup>
                <MessageIcon>
                  <FiMail />
                </MessageIcon>
                <TextArea
                  placeholder="Your Message *"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Message is too short" },
                    validate: (value) =>
                      value.trim() !== "" || "Message cannot be empty",
                  })}
                  $hasError={!!errors.message}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormGroup>
              <RecaptchaWrapper>
                <ReCAPTCHA
                  key={isDarkMode ? "dark" : "light"}
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  theme={isDarkMode ? "dark" : "light"}
                />
              </RecaptchaWrapper>
              <SubmitButton
                type="submit"
                disabled={isSubmitting || !recaptchaToken}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend />
              </SubmitButton>
              {submitError && <FormError>{submitError}</FormError>}
            </Form>
          </>
        )}
        <ContactInfo>
          <ContactInfoTitle>Let's Connect</ContactInfoTitle>
          <ContactDetails>
            <ContactItem
              onClick={() => (window.location.href = "tel:+14807340623")}
            >
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>
                <FiPhone />
                <span>+1 (480) 734-0623</span>
              </ContactValue>
            </ContactItem>
            <ContactItem
              onClick={() =>
                (window.location.href = "mailto:drewjball@gmail.com")
              }
            >
              <ContactLabel>Email</ContactLabel>
              <ContactValue>
                <FiMail />
                <span>drewjball@gmail.com</span>
              </ContactValue>
            </ContactItem>
          </ContactDetails>
          <SocialLinks>
            <SocialLinksLabel>Follow Me</SocialLinksLabel>
            <SocialLinksWrapper>
              <SocialLink
                href="https://github.com/drewjball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/drew-ball-b42912166"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </SocialLink>
              <SocialLink
                href="https://instagram.com/drewjball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <FiInstagram />
              </SocialLink>
              <SocialLink
                href="https://youtube.com/@drewjball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube Profile"
              >
                <FiYoutube />
              </SocialLink>
              <SocialLink
                href="https://x.com/drewjball"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
              >
                <RiTwitterXFill />
              </SocialLink>
            </SocialLinksWrapper>
          </SocialLinks>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  )
}
