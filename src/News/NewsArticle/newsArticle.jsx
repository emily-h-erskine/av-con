import React, { useState } from 'react';
import { Box, Button, Typography, Collapse, Divider } from '@mui/material';
import './newsArticle.css';

const NewsArticle = ({
  title,
  summary = [],
  fullContent = [],
  tags = '',
  galleryLink = '',
  email = '',
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <Box className="news-article-container">
      <Typography variant="h4" className="news-article-title">
        {title}
      </Typography>

      <Divider sx={{ marginBottom: 3 }} />

      {summary.map((para, index) => (
        <Typography key={index} variant="body1" className="news-article-paragraph">
          {para}
        </Typography>
      ))}

      {galleryLink && (
        <Typography variant="body1" className="news-article-paragraph">
          📸 Check out the photo gallery from the launch{' '}
          <a href={galleryLink} target="_blank" rel="noopener noreferrer">here</a>.
        </Typography>
      )}

      <Collapse in={expanded}>
        <Divider sx={{ margin: '24px 0' }} />

        {fullContent.map((para, index) => (
          <Typography key={index} variant="body1" className="news-article-paragraph">
            {para}
          </Typography>
        ))}

        {email && (
          <Typography variant="body1" className="news-article-paragraph">
            ✉️ Want to get involved? Contact <a href={`mailto:${email}`}>{email}</a> to be part of the movement.
          </Typography>
        )}

        {tags && (
          <Typography variant="body1" className="news-article-tags">
            {tags}
          </Typography>
        )}
      </Collapse>

      <Box className="news-article-button-container">
        <Button
          onClick={toggleExpand}
          variant="contained"
          color="primary"
          className="news-article-button"
          aria-label={expanded ? 'Collapse article' : 'Expand article'}
        >
          {expanded ? 'Show Less ▲' : 'Read More ▼'}
        </Button>
      </Box>
    </Box>
  );
};

export default NewsArticle;
