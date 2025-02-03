import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  FONT_WEIGHTS,
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
import { SubmitHandler, useForm } from "react-hook-form"

import { RiTwitterXFill } from "react-icons/ri"
import styled from "styled-components"
import { useState } from "react"
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

const BackgroundDecoration = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  top: -50%;
  left: -20%;
  width: 80%;
  height: 200%;
  background: ${({ theme }) => theme.secondary};
  transform: rotate(35deg);
  z-index: ${Z_INDEX.BACKGROUND};
  opacity: ${({ isDarkMode }) => (isDarkMode ? OPACITY.LOW : OPACITY.HIGH)};
`

const Title = styled.h1`
  font-size: ${FONT_SIZES.XXXLARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.LARGE};
  text-align: center;
`

const Subtitle = styled.p`
  font-size: ${FONT_SIZES.MEDIUM};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.LARGE};
  text-align: center;
  opacity: ${OPACITY.MEDIUM};
`

const Form = styled.form`
  display: grid;
  gap: ${SPACING.LARGE};
  background: ${({ theme }) => theme.glass};
  padding: ${SPACING.LARGE};
  border-radius: ${BORDER_RADIUS.MEDIUM};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${SPACING.LARGE};
`

const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 78px;
`

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  padding-left: ${SPACING.LARGE};
  background: ${({ theme }) => theme.background};
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? "red" : theme.border)};
  border-radius: ${BORDER_RADIUS.SMALL};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.BASE};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: ${SHADOWS.MEDIUM};
  }
`

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  padding-left: ${SPACING.LARGE};
  background: ${({ theme }) => theme.background};
  border: 1px solid
    ${({ theme, hasError }) => (hasError ? "red" : theme.border)};
  border-radius: ${BORDER_RADIUS.SMALL};
  color: ${({ theme }) => theme.text};
  font-size: ${FONT_SIZES.BASE};
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s;

  &:focus {
    outline: none;
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
  margin-top: ${SPACING.LARGE};

  &:hover {
    transform: translateY(-2px);
    xbox-shadow: ${SHADOWS.MEDIUM};
  }

  &:disabled {
    opacity: ${OPACITY.MEDIUM};
    cursor: not-allowed;
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

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  }
`

const ContactInfoTitle = styled.h2`
  font-size: ${FONT_SIZES.XXXLARGE};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${SPACING.LARGE};
  text-align: center;
  font-weight: ${FONT_WEIGHTS.BOLD};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    font-size: ${FONT_SIZES.XXLARGE};
    margin-bottom: ${SPACING.LARGE};
  }
`

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${SPACING.LARGE};
  justify-content: center;
  margin-bottom: ${SPACING.LARGE};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr;
    max-width: ${BREAKPOINTS.MISC};
    margin-left: auto;
    margin-right: auto;
  }
`

const ContactItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.MEDIUM};
  padding: ${SPACING.LARGE};
  background: ${({ theme }) => theme.background}15;
  border-radius: ${BORDER_RADIUS.MEDIUM};
  transition: ${TRANSITIONS.DEFAULT};
  text-decoration: none;
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.background}25;
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.accent}40;
    box-shadow: ${SHADOWS.MEDIUM};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.MEDIUM};
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

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    gap: ${SPACING.MEDIUM};
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

export function Contact() {
  const { isDarkMode } = useThemeStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    setIsSubmitting(true)
    try {
      const trimmedData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() : value,
        ])
      )
      console.log(trimmedData)
      alert("Message sent successfully!")
    } catch (error) {
      alert("Failed to send message. Please try again.")
    }
    setIsSubmitting(false)
  }

  return (
    <ContactSection>
      <BackgroundDecoration isDarkMode={isDarkMode} />
      <ContactContainer>
        <Title>Reach Out!</Title>
        <Subtitle>
          I'm always interested in hearing about new opportunities and
          connections.
        </Subtitle>
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
                hasError={!!errors.firstName}
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
                hasError={!!errors.lastName}
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
                hasError={!!errors.email}
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
                hasError={!!errors.phone}
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
              hasError={!!errors.message}
            />
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            <FiSend />
            {isSubmitting ? "Sending..." : "Send Message"}
          </SubmitButton>
        </Form>

        <ContactInfo>
          <ContactInfoTitle>Let's Connect</ContactInfoTitle>
          <ContactDetails>
            <ContactItem href="tel:+14807340623">
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>
                <FiPhone />
                <span>+1 (480) 734-0623</span>
              </ContactValue>
            </ContactItem>
            <ContactItem href="mailto:drewjball@gmail.com">
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
