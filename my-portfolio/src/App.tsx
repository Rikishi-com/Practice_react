import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <>
      <div>
        <div>
          <header>
            <h1>上野結稀のポートフォリオサイト</h1>
            <div className="navigate">
              <nav>
                <a href="#card">プロフィール</a>
                <a href="#project">プロジェクト</a>
              </nav>
            </div>
          </header>
        </div>
        <div>
          <h2>自己紹介</h2>
          <p>大学で情報工学を学び、インフラとWeb開発に興味を持っています。将来はクラウド技術を活かしたエンジニアを目指しています。
          インフラ構築をメインに学習していましたが，最近バックエンドやフロントエンドの技術にも興味を持ち始めました。</p>
        </div>

        <div className="card">
          <h2>資格</h2>
          <ul>普通自動車免許</ul>
          <ul>普通自動二輪車免許</ul>
          <ul>大型自動二輪車免許</ul>
        </div>

        <div className="card">
          <h2>スキル</h2>
          <ul>AWS, Linux, Docker, Terraform</ul>
          <ul>HTML, CSS, JavaScript,TypeScript,React</ul>
          <ul>Python, Django</ul>
        </div>
        
        <div>
          <h2>プロジェクト一覧</h2>

          <div className="project">
            <ProjectCard
            projectName="iDeal"
            projectSubName="アイディア導出アプリ"
            detail="私の担当はAWSを用いた環境構築AWSの主要機能を活用した実践的な作品.
            使用技術などはスライド内に記載しております"
            slideName="Canvaスライド"
            slide="https://hacku-nagoya-hackathon.my.canva.site/"
            siteName="OPEN HACK U NAGOYA 2025公式サイト"
            site="https://hacku.yahoo.co.jp/hacku2025_nagoya/"
            result="OPEN HACK U NAGOYA 2025参加作品"
            />
          </div>
        </div>


      </div>
    </>
  )
}

export default App
