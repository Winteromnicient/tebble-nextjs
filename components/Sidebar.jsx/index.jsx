import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
      title: 'Business',
      url:'/'
    },
    {
      title: 'Agency',
      url:'/'
    },
    {
      title: 'Artwork',
      url:'/'
    },
    {
      title: 'Marketing',
      url:'/'
    },
    {
      title: 'Information',
      url:'/'
    },
    {
      title: 'Design',
      url:'/'
    },
    {
      title: 'Wordpress',
      url:'/'
    },
  ]
  const archiveData = [
    {
      title: 'Archives',
      url:'/'
    },
    {
      title: '15 Aug 2022',
      url:'/'
    },
    {
      title: '20 Sep 2021',
      url:'/'
    },
    {
      title: '11 Dec 2020',
      url:'/'
    },
    {
      title: '25 jun 2020',
      url:'/'
    }
  ]
  const categoryData = [
    {
      title: 'Web Development',
      url:'/category/web'
    },
    {
      title: 'Web Design',
      url:'/category/Web Design'
    },
    {
      title: 'Apps',
      url:'/category/Mobile App'
    },
    {
      title: 'CRO Blogs',
      url:'/category/UIUX'
    }    
  ]
  const recentPostData = [
    {
      title: 'Why Svelte is better..',
      thumb: '/images/favicon.png',
      href: '/blog/blog-details',
      date: '15 Aug 2023'
    },
    {
      title: 'How we helped Ford..',
      thumb: '/images/favicon.png',
      href: '/blog/blog-details',
      date: '12 Jun 2019'
    },
    {
      title: 'How CRO can help..',
      thumb: '/images/favicon.png',
      href: '/blog/blog-details',
      date: '09 March 2022'
    },
    {
      title: 'Trust factors in ecom..',
      thumb: '/images/favicon.png',
      href: '/blog/blog-details',
      date: '27 Nov 2022'
    },
  ]
  return (
    <>
      <Div className="cs-sidebar_item">
        <AuthorWidget 
          src='/images/avatar_2.png'
          name='Siddhant Jadhav' 
          description='Love creating Tech solutions for corporates & startups.'

        />
      </Div>
     
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>    
     
    </>
  )
}
