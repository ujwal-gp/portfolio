import type { ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  alpha,
} from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: readonly string[];
};

type SkillGroup = {
  label: string;
  icon: ReactNode;
  skills: readonly string[];
};

type ContactLink = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
};

type NavItem = {
  label: string;
  sectionId: string;
};

type Metric = {
  label: string;
  description: string;
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#0f766e",
      dark: "#115e59",
    },
    secondary: {
      main: "#b45309",
    },
    text: {
      primary: "#142033",
      secondary: "#58667c",
    },
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
    divider: "#d8dee8",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: 0,
      lineHeight: 0.92,
    },
    h2: {
      fontWeight: 900,
      letterSpacing: 0,
      lineHeight: 1.06,
    },
    h3: {
      fontWeight: 850,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const navItems = [
  { label: "Skills", sectionId: "skills" },
  { label: "Experience", sectionId: "experience" },
  { label: "Project", sectionId: "project" },
  { label: "Contact", sectionId: "contact" },
] satisfies readonly NavItem[];

const skillGroups = [
  {
    label: "Backend",
    icon: <CodeRoundedIcon />,
    skills: ["Java", "Spring Boot", "Node.js", "ASP.NET Core", "Apache Camel", "Django", "ColdFusion"],
  },
  {
    label: "Frontend",
    icon: <RocketLaunchRoundedIcon />,
    skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Material UI", "Thymeleaf"],
  },
  {
    label: "Data",
    icon: <StorageRoundedIcon />,
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Schema design", "Query optimisation"],
  },
  {
    label: "Delivery",
    icon: <VerifiedRoundedIcon />,
    skills: ["AWS", "Docker", "Git", "Linux", "CI/CD", "JIRA", "Confluence"],
  },
  {
    label: "Quality & Security",
    icon: <SecurityRoundedIcon />,
    skills: ["JUnit", "Mockito", "Jest", "Cypress", "REST APIs", "Authentication", "Authorisation"],
  },
] satisfies readonly SkillGroup[];

const experiences = [
  {
    role: "Software Engineer",
    company: "Paymentology Limited",
    location: "United Kingdom",
    period: "Feb 2020 - Jan 2024",
    highlights: [
      "Developed and maintained scalable RESTful APIs with Java, Spring Boot, Apache Camel and PostgreSQL.",
      "Built responsive frontend applications using React.js, TypeScript, HTML5 and CSS3.",
      "Designed and optimised relational database schemas to improve application performance and query efficiency.",
      "Implemented authentication and authorisation mechanisms for secure client-side and server-side access control.",
      "Created automated unit and end-to-end tests with JUnit, Mockito, Jest and Cypress.",
      "Supported production deployment and maintenance using Docker and AWS services.",
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "IT Deurali Inc. Pvt. Ltd.",
    location: "Nepal",
    period: "Jul 2019 - Jan 2020",
    highlights: [
      "Completed enterprise software engineering training focused on Java and Spring Boot.",
      "Developed backend applications and database-driven web solutions using Java, MySQL and PostgreSQL.",
      "Built dynamic web interfaces using Thymeleaf templates.",
      "Applied object-oriented programming concepts and real-world software problem-solving techniques.",
    ],
  },
] satisfies readonly Experience[];

const metrics = [
  {
    label: "Payment Systems",
    description: "Enterprise APIs, compliance-aware delivery and secure access control.",
  },
  {
    label: "Production Delivery",
    description: "Docker, AWS, CI/CD workflows, testing and Agile collaboration.",
  },
  {
    label: "Applied Research",
    description: "Federated XGBoost anomaly detection for MQTT and MIoT data.",
  },
] satisfies readonly Metric[];

const certifications = [
  "OWASP Top 10 Security Awareness",
  "PCI DSS Security Awareness",
  "Kevin Mitnick Security Awareness Training",
  "Cyber Security for Remote Workers",
] as const;

const contactLinks = [
  { label: "Email", icon: <EmailRoundedIcon />, onClick: () => openMailClient() },
  { label: "GitHub", icon: <GitHubIcon />, onClick: () => openExternalUrl("https://github.com/ujwal-gp") },
  {
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    onClick: () => openExternalUrl("https://www.linkedin.com/in/ujwal-ghale-pariyar-32ab53177"),
  },
  {
    label: "Stack Overflow",
    icon: <OpenInNewRoundedIcon />,
    onClick: () => openExternalUrl("https://stackoverflow.com/users/9826080/ujwal-ghale-pariyar"),
  },
] satisfies readonly ContactLink[];

const projectTools = ["Flower", "XGBoost", "MQTTset", "Ubuntu VMs", "ARM architecture"] as const;

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          backgroundImage: (muiTheme) =>
            `linear-gradient(90deg, ${alpha(muiTheme.palette.text.primary, 0.05)} 1px, transparent 1px),
             linear-gradient(180deg, #f9fafb 0%, #eef2f7 42%, #f8fafc 100%)`,
          backgroundSize: "72px 72px, auto",
        }}
      >
        <SiteHeader />
        <Box component="main" id="top">
          <HeroSection />
          <MetricsBand />
          <SkillsSection />
          <ExperienceSection />
          <ProjectSection />
          <CredentialsSection />
          <ContactSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const SiteHeader = () => (
  <AppBar
    position="sticky"
    color="transparent"
    elevation={0}
    sx={{
      borderBottom: 1,
      borderColor: "divider",
      bgcolor: alpha("#f6f7f9", 0.9),
      backdropFilter: "blur(16px)",
    }}
  >
    <Container maxWidth="lg">
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: 92, sm: 76 },
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1.5, sm: 3 },
          justifyContent: "space-between",
          py: { xs: 1.5, sm: 0 },
        }}
      >
        <Button
          aria-label="Ujwal Ghale Pariyar home"
          onClick={() => scrollToSection("top")}
          sx={{
            minWidth: 44,
            width: 44,
            height: 44,
            overflow: "hidden",
            p: 0,
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            "&:hover": { bgcolor: "background.paper" },
          }}
        >
          <Box
            component="img"
            src="/portfolio_img.jpeg"
            alt=""
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Button>

        <Stack
          component="nav"
          aria-label="Primary navigation"
          direction="row"
          spacing={{ xs: 0.5, sm: 1 }}
          sx={{
            width: { xs: "100%", sm: "auto" },
            overflowX: { xs: "auto", sm: "visible" },
            pb: { xs: 0.5, sm: 0 },
          }}
        >
          {navItems.map((item) => (
            <Button key={item.sectionId} color="inherit" onClick={() => scrollToSection(item.sectionId)}>
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

const HeroSection = () => (
  <Container
    maxWidth="lg"
    component="section"
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.08fr) minmax(340px, 0.72fr)" },
      gap: { xs: 4, md: 8 },
      alignItems: "center",
      minHeight: { xs: "auto", md: "calc(100svh - 77px)" },
      py: { xs: 7, md: 10 },
    }}
  >
    <Stack spacing={3}>
      <Eyebrow>Mid-Level Full Stack Software Engineer</Eyebrow>
      <Typography variant="h1" sx={{ fontSize: { xs: "3.3rem", sm: "5rem", lg: "7.2rem" }, maxWidth: 880 }}>
        Ujwal Ghale Pariyar
      </Typography>
      <Typography variant="h5" component="p" color="text.secondary" sx={{ maxWidth: 760, lineHeight: 1.6 }}>
        I design and ship scalable web applications, enterprise APIs and cloud-enabled software with Java, Spring Boot,
        React, TypeScript, PostgreSQL, Docker and AWS.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <Button variant="contained" size="large" startIcon={<EmailRoundedIcon />} onClick={openMailClient}>
          Contact Me
        </Button>
        <Button variant="outlined" size="large" startIcon={<DownloadRoundedIcon />} onClick={downloadCv}>
          Download CV
        </Button>
      </Stack>
    </Stack>

    <Paper
      elevation={0}
      sx={{
        p: 2,
        border: 1,
        borderColor: "divider",
        boxShadow: "0 18px 46px rgba(37, 49, 69, 0.08)",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1.25fr" },
          minHeight: { xs: 360, sm: 280 },
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "#e9eef5",
          backgroundImage:
            "linear-gradient(135deg, rgba(15, 118, 110, 0.16), transparent 34%), linear-gradient(225deg, rgba(180, 83, 9, 0.18), transparent 38%)",
        }}
      >
        <Box
          sx={{
            minHeight: { xs: 280, sm: "auto" },
            overflow: "hidden",
            bgcolor: "text.primary",
          }}
        >
          <Box
            component="img"
            src="/graduation_img.jpeg"
            alt="Ujwal Ghale Pariyar at graduation"
            sx={{
              width: "100%",
              height: "100%",
              minHeight: "inherit",
              display: "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            bgcolor: "divider",
          }}
        >
          {["REST", "React", "AWS", "SQL"].map((signal) => (
            <Box
              key={signal}
              sx={{
                display: "grid",
                placeItems: "center",
                minWidth: 0,
                bgcolor: alpha("#ffffff", 0.75),
                color: "#23324a",
                fontWeight: 900,
              }}
            >
              {signal}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        component="dl"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: "1px",
          m: 0,
          mt: 2,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "divider",
        }}
      >
        {[
          ["Experience", "4+ years"],
          ["Location", "Aldershot, UK"],
          ["Focus", "Secure full stack systems"],
          ["Research", "Federated anomaly detection"],
        ].map(([term, description]) => (
          <Box key={term} sx={{ minWidth: 0, p: 2, bgcolor: "background.paper" }}>
            <Typography component="dt" color="text.secondary" sx={{ fontSize: "0.76rem", fontWeight: 900 }}>
              {term}
            </Typography>
            <Typography component="dd" sx={{ m: 0, mt: 0.75, fontWeight: 850 }}>
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  </Container>
);

const MetricsBand = () => (
  <Box component="section" aria-label="Professional highlights" sx={{ bgcolor: "text.primary", color: "common.white" }}>
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "1px",
        bgcolor: alpha("#ffffff", 0.18),
      }}
    >
      {metrics.map((metric) => (
        <Box key={metric.label} sx={{ bgcolor: "text.primary", px: { xs: 2.5, md: 9 }, py: { xs: 3, md: 4 } }}>
          <Typography component="strong" sx={{ display: "block", mb: 1, fontWeight: 900 }}>
            {metric.label}
          </Typography>
          <Typography color="#dce5f1" sx={{ lineHeight: 1.55 }}>
            {metric.description}
          </Typography>
        </Box>
      ))}
    </Container>
  </Box>
);

const SkillsSection = () => (
  <SectionShell id="skills" eyebrow="Technical Skills" title="Practical stack coverage from API design to interface polish.">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
        gap: 2,
      }}
    >
      {skillGroups.map((group) => (
        <Card key={group.label} variant="outlined" sx={{ boxShadow: "0 18px 46px rgba(37, 49, 69, 0.08)" }}>
          <CardContent>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
              <Box sx={{ color: "primary.main", display: "flex" }}>{group.icon}</Box>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 900 }}>
                {group.label}
              </Typography>
            </Stack>
            <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
              {group.skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
              ))}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  </SectionShell>
);

const ExperienceSection = () => (
  <SectionShell id="experience" eyebrow="Professional Experience" title="Four years building reliable systems in software and payments.">
    <Stack spacing={2.5} sx={{ position: "relative" }}>
      {experiences.map((item) => (
        <Box
          key={`${item.role}-${item.company}`}
          sx={{
            display: "grid",
            gridTemplateColumns: "26px 1fr",
            gap: 2.5,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: -20,
              left: 12,
              width: 2,
              bgcolor: "divider",
            },
            "&:last-of-type::before": {
              bottom: "calc(100% - 36px)",
            },
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: "relative",
              zIndex: 1,
              width: 24,
              height: 24,
              mt: 3,
              border: 5,
              borderColor: "background.default",
              borderRadius: "50%",
              bgcolor: "primary.main",
              boxShadow: "0 0 0 1px #9fb2c8",
            }}
          />
          <Card variant="outlined" sx={{ boxShadow: "0 18px 46px rgba(37, 49, 69, 0.08)" }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                <Chip size="small" icon={<WorkRoundedIcon />} label={item.period} />
                <Chip size="small" icon={<LocationOnRoundedIcon />} label={item.location} />
              </Stack>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 900 }}>
                {item.role}
              </Typography>
              <Typography component="h4" color="primary.main" sx={{ fontWeight: 850, mb: 2 }}>
                {item.company}
              </Typography>
              <List dense disablePadding>
                {item.highlights.map((highlight) => (
                  <ListItem key={highlight} disableGutters sx={{ alignItems: "flex-start", py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 26, pt: 0.5 }}>
                      <VerifiedRoundedIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={highlight} slotProps={{ primary: { color: "text.secondary" } }} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
  </SectionShell>
);

const ProjectSection = () => (
  <Box component="section" id="project" sx={{ bgcolor: "#e9eef5", borderBlock: 1, borderColor: "divider" }}>
    <SectionShell eyebrow="Featured Project" title="Federated MQTT Anomaly Detection System" dense>
      <Stack spacing={3}>
        <Typography color="text.secondary" sx={{ fontSize: "1.08rem", lineHeight: 1.72 }}>
          Developed a federated learning system using Flower and XGBoost to detect anomalies in MQTT traffic. The work
          simulated distributed learning environments with Ubuntu virtual machines and ARM-based architecture, using
          MQTTset datasets for behavioural analysis and anomaly detection research.
        </Typography>
        <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
          {projectTools.map((tool) => (
            <Chip key={tool} label={tool} color="primary" variant="outlined" />
          ))}
        </Stack>
      </Stack>
    </SectionShell>
  </Box>
);

const CredentialsSection = () => (
  <Container
    maxWidth="lg"
    component="section"
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
      gap: 2.5,
      py: { xs: 8, md: 12 },
    }}
  >
    <Card variant="outlined" sx={{ boxShadow: "0 18px 46px rgba(37, 49, 69, 0.08)" }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Eyebrow>Education</Eyebrow>
        <Typography variant="h3" component="h2" sx={{ mb: 3, fontSize: { xs: "1.75rem", md: "2.3rem" } }}>
          Computer Science foundation and current research depth.
        </Typography>
        <CredentialItem
          title="MSc in Computer Science"
          subtitle="University of Staffordshire, 2025"
          description="Dissertation focused on federated XGBoost anomaly detection for Medical Internet of Things systems."
        />
        <CredentialItem title="BSc in Computer Science and Information Technology" subtitle="Tribhuvan University, 2019" />
      </CardContent>
    </Card>

    <Card variant="outlined" sx={{ boxShadow: "0 18px 46px rgba(37, 49, 69, 0.08)" }}>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Eyebrow>Certifications</Eyebrow>
        <Typography variant="h3" component="h2" sx={{ mb: 3, fontSize: { xs: "1.75rem", md: "2.3rem" } }}>
          Security-aware engineering habits.
        </Typography>
        <List disablePadding>
          {certifications.map((certification) => (
            <ListItem key={certification} disableGutters>
              <ListItemIcon sx={{ minWidth: 34 }}>
                <SecurityRoundedIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={certification} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" component="h3" sx={{ fontWeight: 900 }}>
          Languages
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          English - Professional Working Proficiency (B2)
        </Typography>
        <Typography color="text.secondary">Nepali - Native / Fluent</Typography>
      </CardContent>
    </Card>
  </Container>
);

const ContactSection = () => (
  <Box component="section" id="contact" sx={{ bgcolor: "text.primary", color: "common.white" }}>
    <Container
      maxWidth="lg"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(320px, 0.55fr)" },
        gap: { xs: 4, md: 8 },
        alignItems: "start",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box>
        <Typography
          component="p"
          sx={{ mb: 1.75, color: "common.white", fontSize: "0.78rem", fontWeight: 900, textTransform: "uppercase" }}
        >
          Contact
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3.25rem" }, maxWidth: 760 }}>
          Available for full stack engineering roles and collaborative product teams.
        </Typography>
      </Box>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Link
            component="button"
            type="button"
            onClick={openMailClient}
            underline="hover"
            sx={{
              mb: 1,
              color: "primary.main",
              fontSize: { xs: "1.05rem", sm: "1.35rem" },
              fontWeight: 900,
              overflowWrap: "anywhere",
              textAlign: "left",
            }}
          >
            gpujwal054@gmail.com
          </Link>
          <Typography color="text.secondary" sx={{ mb: 2.5 }}>
            Aldershot, United Kingdom
          </Typography>
          <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
            {contactLinks.map((link) => (
              <Button key={link.label} variant="outlined" startIcon={link.icon} onClick={link.onClick}>
                {link.label}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  dense?: boolean;
};

const SectionShell = ({ id, eyebrow, title, children, dense = false }: SectionShellProps) => (
  <Container
    maxWidth="lg"
    component="section"
    id={id}
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 0.42fr) minmax(0, 1fr)" },
      gap: { xs: 4, md: 8 },
      py: dense ? { xs: 7, md: 10 } : { xs: 8, md: 12 },
    }}
  >
    <Box sx={{ maxWidth: { xs: 720, md: 430 } }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "3.25rem" } }}>
        {title}
      </Typography>
    </Box>
    {children}
  </Container>
);

type CredentialItemProps = {
  title: string;
  subtitle: string;
  description?: string;
};

const CredentialItem = ({ title, subtitle, description }: CredentialItemProps) => (
  <Box sx={{ pt: 2.75, mt: 2.75, borderTop: 1, borderColor: "divider" }}>
    <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 1 }}>
      <SchoolRoundedIcon color="primary" fontSize="small" />
      <Typography variant="h6" component="h3" sx={{ fontWeight: 900 }}>
        {title}
      </Typography>
    </Stack>
    <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
      {subtitle}
    </Typography>
    {description ? (
      <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
        {description}
      </Typography>
    ) : null}
  </Box>
);

type EyebrowProps = {
  children: string;
};

const Eyebrow = ({ children }: EyebrowProps) => (
  <Typography
    component="p"
    color="primary.main"
    sx={{ mb: 1.75, fontSize: "0.78rem", fontWeight: 900, letterSpacing: 0, textTransform: "uppercase" }}
  >
    {children}
  </Typography>
);

const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", sectionId === "top" ? "/" : `#${sectionId}`);
};

const openMailClient = (): void => {
  window.location.href = "mailto:gpujwal054@gmail.com";
};

const openExternalUrl = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const downloadCv = (): void => {
  const link = document.createElement("a");

  link.href = "/Ujwal_Ghale_Pariyar_Full_Stack_CV.pdf";
  link.download = "Ujwal_Ghale_Pariyar_Full_Stack_CV.pdf";
  link.click();
};

export default Portfolio;
