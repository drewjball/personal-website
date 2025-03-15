import {
  BORDER_RADIUS,
  BREAKPOINTS,
  FONT_SIZES,
  LINE_HEIGHTS,
  OPACITY,
  SHADOWS,
  SPACING,
} from "../constants/theme"
import { PageSubtitle, PageTitle } from "./shared/SharedStyles"

import { SEO } from "./shared/SEO"
import styled from "styled-components"

const BlogSection = styled.section`
  padding: ${SPACING.XLARGE} ${SPACING.LARGE};
  max-width: ${BREAKPOINTS.DESKTOP};
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: ${SPACING.LARGE} ${SPACING.MEDIUM};
  }
`

const BlogPost = styled.article`
  margin-bottom: ${SPACING.XXLARGE};
  padding: ${SPACING.LARGE};
  background: ${({ theme }) => theme.glass};
  border-radius: ${BORDER_RADIUS.LARGE};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${SHADOWS.MEDIUM};
`

const PostTitle = styled.h2`
  font-size: ${FONT_SIZES.XLARGE};
  color: ${({ theme }) => theme.primary};
  margin-bottom: ${SPACING.MEDIUM};
`

const PostDate = styled.time`
  display: block;
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
`

const PostContent = styled.div`
  font-size: ${FONT_SIZES.BASE};
  line-height: ${LINE_HEIGHTS.LARGE};
  color: ${({ theme }) => theme.text};
  opacity: ${OPACITY.HIGH};

  p {
    margin-bottom: ${SPACING.MEDIUM};
  }
`

export function Blog() {
  return (
    <>
      <SEO
        title="Blog – Frontend Development, Performance, & Engineering Insights by Drew Ball"
        description="Technical insights on frontend engineering, full-stack development, and modern web technologies. Read expert takes from Senior Software Engineer Drew Ball."
        path="/blog"
      />
      <BlogSection>
        <PageTitle>Blog</PageTitle>
        <PageSubtitle>
          Thoughts on software engineering, web development, and technology
        </PageSubtitle>

        <BlogPost>
          <PostTitle>The Evolution of Frontend Development</PostTitle>
          <PostDate>Coming Soon</PostDate>
          <PostContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </PostContent>
        </BlogPost>

        <BlogPost>
          <PostTitle>Building Scalable React Applications</PostTitle>
          <PostDate>Coming Soon</PostDate>
          <PostContent>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </PostContent>
        </BlogPost>

        <BlogPost>
          <PostTitle>The Impact of AI on Software Development</PostTitle>
          <PostDate>Coming Soon</PostDate>
          <PostContent>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              Similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.
            </p>
          </PostContent>
        </BlogPost>
      </BlogSection>
    </>
  )
}
