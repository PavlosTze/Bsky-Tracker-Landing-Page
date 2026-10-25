import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Filter,
  Info,
  ListChecks,
  Shield,
  UserMinus,
  Users,
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import GuideDownloadCTA from './GuideDownloadCTA';
import {Button} from './ui/button';
import {Card, CardContent} from './ui/card';
import {getMessages} from '../i18n/messages';

const guideIcons = {
  filter: Filter,
  'list-checks': ListChecks,
  shield: Shield,
  'user-minus': UserMinus,
  users: Users,
};

const GuideArticle = ({guide, locale = 'en', messages = getMessages('en')}) => {
  const GuideIcon = guideIcons[guide.icon] || CheckCircle2;
  const labels = messages.guides.articleLabels;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header
        showGuides={true}
        showFeatures={false}
        locale={locale}
        messages={messages}
      />

      <main>
        <section className="relative overflow-hidden pb-12 pt-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <GuideIcon className="h-8 w-8 text-blue-300" aria-hidden="true" />
                </div>
              </div>
              <h1 className="mb-6 text-2xl font-bold leading-tight text-white md:text-6xl">
                {guide.heroTitleStart} <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {guide.heroTitleAccent}
                </span>
                <br /> {guide.heroTitleEnd}
              </h1>
              <div className="mx-auto max-w-2xl text-lg text-white/80">{guide.description}</div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <Card className="border-blue-300/25 bg-blue-400/10 backdrop-blur-md">
                <CardContent className="flex gap-4 p-5 sm:p-6">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-green-300" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{labels.quickAnswer}</h2>
                    <p className="mt-2 leading-relaxed text-white/90">{guide.quickAnswer}</p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h2 className="mb-5 text-2xl font-bold text-white">{labels.steps}</h2>
                <div className="space-y-6">
                  {guide.steps.map((step, index) => (
                    <Card key={step.title} className="overflow-hidden border-white/15 bg-white/10 backdrop-blur-md">
                      <CardContent className="grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_280px] md:items-center">
                        <div>
                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          <p className="mt-3 leading-relaxed text-white/90">{step.description}</p>
                          {step.caption && <p className="mt-4 text-sm leading-relaxed text-blue-200">{step.caption}</p>}
                        </div>
                        <div className="flex justify-center rounded-2xl border border-white/10 bg-black/20 p-3">
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            className="max-h-[540px] w-auto max-w-full rounded-xl object-contain"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-amber-300/20 bg-amber-300/10 backdrop-blur-md">
                <CardContent className="flex gap-4 p-5 sm:p-6">
                  <Info className="mt-0.5 h-6 w-6 flex-none text-amber-200" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{guide.note.title}</h2>
                    <p className="mt-2 leading-relaxed text-white/90">{guide.note.text}</p>
                  </div>
                </CardContent>
              </Card>

              <GuideDownloadCTA messages={messages} />

              <div className="flex justify-center">
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Link href={`/${locale}/guides`}>
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    {labels.allGuides}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} messages={messages} />
    </div>
  );
};

export default GuideArticle;
