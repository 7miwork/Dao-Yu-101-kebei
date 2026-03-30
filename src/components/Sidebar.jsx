import { Home, Book, Users, School, Settings, BarChart3, GraduationCap, UserCheck } from "lucide-react";
import { useLocation } from "react-router-dom";
import { t } from '../i18n';

function NavItem({ href, icon, label, active }) {
  return (
    <a
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderRadius: "10px",
        textDecoration: "none",
        background: active ? "#EEF2FF" : "transparent",
        color: active ? "#4F7CFF" : "#0F172A",
        marginTop: "5px",
        transition: "all 0.2s ease"
      }}
    >
      {icon}
      {label}
    </a>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontSize: "12px", color: "#64748B", fontWeight: "600", letterSpacing: "0.5px" }}>
        {title.toUpperCase()}
      </p>
      {children}
    </div>
  );
}

export default function Sidebar({ user }) {
  const location = useLocation();
  const role = user?.role;

  const isActive = (path) => location.pathname.includes(path);

  return (
    <aside style={{
      width: "240px",
      borderRight: "1px solid #E2E8F0",
      padding: "20px",
      background: "#fff",
      minHeight: "100vh"
    }}>
      <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "bold", color: "#1E293B" }}>
        Dao-Yu-101
      </h2>

      {/* SECTION: GENERAL */}
      <Section title={t("sidebar.general")}>
        <NavItem
          href="/#/dashboard"
          icon={<Home size={18} />}
          label={t("sidebar.dashboard")}
          active={isActive("dashboard") && !isActive("student") && !isActive("teacher") && !isActive("parent") && !isActive("school") && !isActive("admin")}
        />
      </Section>

      {/* ROLE BASED SECTIONS */}
      {role === "student" && (
        <Section title={t("sidebar.learning")}>
          <NavItem
            href="/#/dashboard/student"
            icon={<Book size={18} />}
            label={t("sidebar.myLearning")}
            active={isActive("student")}
          />
        </Section>
      )}

      {role === "teacher" && (
        <Section title={t("sidebar.teaching")}>
          <NavItem
            href="/#/dashboard/teacher"
            icon={<Users size={18} />}
            label={t("sidebar.classes")}
            active={isActive("teacher")}
          />
        </Section>
      )}

      {role === "parent" && (
        <Section title={t("sidebar.family")}>
          <NavItem
            href="/#/dashboard/parent"
            icon={<UserCheck size={18} />}
            label={t("sidebar.childProgress")}
            active={isActive("parent")}
          />
        </Section>
      )}

      {role === "school" && (
        <Section title={t("sidebar.school")}>
          <NavItem
            href="/#/dashboard/school"
            icon={<School size={18} />}
            label={t("sidebar.overview")}
            active={isActive("school")}
          />
        </Section>
      )}

      {role === "admin" && (
        <Section title={t("sidebar.system")}>
          <NavItem
            href="/#/dashboard/admin"
            icon={<Settings size={18} />}
            label={t("sidebar.adminPanel")}
            active={isActive("admin")}
          />
        </Section>
      )}
    </aside>
  );
}